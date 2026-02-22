import { Box, Typography, Paper, Divider } from "@mui/material";
import FoodChip from "./FoodChip";
import ResumeChip from "./ResumeChip";
import type { FoodCategory } from "../data/foodData";

interface Props {
    title: string;
    type?: "eat" | "avoid";
    categories: FoodCategory[];
}

export default function FoodPanel({ title, type, categories }: Props) {
    const isEat = type === "eat";
    const isNeutral = !type;

    return (
        <Paper
            elevation={0}
            variant="outlined"
            sx={{
                borderRadius: 0,
                overflow: "hidden",
                borderColor: isEat ? "rgba(102,187,106,0.4)" : isNeutral ? "rgba(0,0,0,0.4)" : "rgba(239,83,80,0.4)",
                height: "100%",
            }}
        >
            {/* Sticky Header */}
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    bgcolor: isEat ? "rgba(102,187,106,0.15)" : isNeutral ? "rgba(255, 255, 255, 0.15)" : "rgba(239,83,80,0.15)",
                    backdropFilter: "blur(8px)",
                    px: 3,
                    py: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    borderBottom: "1px solid",
                    borderColor: isEat ? "rgba(102,187,106,0.25)" : isNeutral ? "rgba(0,0,0,0.25)" : "rgba(239,83,80,0.25)",
                }}
            >
                <Typography fontSize="1.4rem">{isEat ? "✅" : isNeutral ? "💊" : "🚫"}</Typography>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={(theme) => ({
                        color: isEat ? "#66bb6a" : isNeutral ? theme.palette.text.primary : "#ef5350",
                        letterSpacing: 1
                    })}
                >
                    {title}
                </Typography>
            </Box>

            {/* Categories */}
            <Box sx={{ p: 2.5 }}>
                {categories.map((cat, i) => (
                    <Box key={cat.category} mb={2.5}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                                fontSize: "0.65rem",
                                letterSpacing: 1.5,
                                display: "block",
                                mb: 0.8,
                            }}
                        >
                            {cat.category}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                            {cat.items.map((item) => (
                                type ? (
                                    <FoodChip
                                        key={item.name}
                                        emoji={item.emoji}
                                        name={item.name}
                                        tooltip={item.tooltip}
                                        type={type}
                                    />
                                ) : (
                                    <ResumeChip
                                        key={item.name}
                                        emoji={item.emoji}
                                        name={item.name}
                                        tooltip={item.tooltip}
                                    />
                                )
                            ))}
                        </Box>
                        {i < categories.length - 1 && (
                            <Divider sx={{ mt: 2, opacity: 0.2 }} />
                        )}
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}
