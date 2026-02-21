import { Chip, Tooltip } from "@mui/material";
import { useTheme } from '@mui/material/styles';

interface Props {
    emoji: string;
    name: string;
    tooltip?: string;
}

export default function ResumeChip({ emoji, name, tooltip }: Props) {
    const theme = useTheme();
    const chip = (
        <Chip
            label={`${emoji} ${name}`}
            size="small"
            sx={{
                m: 0.4,
                fontWeight: 500,
                fontSize: "0.78rem",
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: "1px solid",
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : theme.palette.divider,
                "&:hover": {
                    bgcolor: theme.palette.action.hover,
                },
                transition: "background-color 0.2s",
            }}
        />
    );

    // Show reason on hover for avoid foods
    return tooltip ? (
        <Tooltip title={tooltip} placement="top" arrow>
            {chip}
        </Tooltip>
    ) : (
        chip
    );
}
