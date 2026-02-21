import { Chip, Tooltip } from "@mui/material";

interface Props {
    emoji: string;
    name: string;
    tooltip?: string;
    type: "eat" | "avoid";
}

export default function FoodChip({ emoji, name, tooltip, type }: Props) {
    const chip = (
        <Chip
            label={`${emoji} ${name}`}
            size="small"
            sx={{
                m: 0.4,
                fontWeight: 500,
                fontSize: "0.78rem",
                bgcolor: type === "eat" ? "rgba(102,187,106,0.12)" : "rgba(239,83,80,0.12)",
                color: type === "eat" ? "#66bb6a" : "#ef5350",
                border: "1px solid",
                borderColor: type === "eat" ? "rgba(102,187,106,0.35)" : "rgba(239,83,80,0.35)",
                "&:hover": {
                    bgcolor: type === "eat" ? "rgba(102,187,106,0.22)" : "rgba(239,83,80,0.22)",
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
