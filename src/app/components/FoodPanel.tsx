import { Box, Typography, Paper, Divider } from "@mui/material";
import FoodChip from "./FoodChip";
import type { FoodCategory } from "../data/foodData";

interface Props {
    title: string;
    type: "eat" | "avoid";
    categories: FoodCategory[];
}

export default function FoodPanel({ title, type, categories }: Props) {
    const isEat = type === "eat";

    return (
        <Paper
            elevation={0}
            variant="outlined"
            sx={{
                borderRadius: 3,
                overflow: "hidden",
                borderColor: isEat ? "rgba(102,187,106,0.4)" : "rgba(239,83,80,0.4)",
                height: "100%",
            }}
        >
            {/* Sticky Header */}
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    bgcolor: isEat ? "rgba(102,187,106,0.15)" : "rgba(239,83,80,0.15)",
                    backdropFilter: "blur(8px)",
                    px: 3,
                    py: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    borderBottom: "1px solid",
                    borderColor: isEat ? "rgba(102,187,106,0.25)" : "rgba(239,83,80,0.25)",
                }}
            >
                <Typography fontSize="1.4rem">{isEat ? "✅" : "🚫"}</Typography>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: isEat ? "#66bb6a" : "#ef5350", letterSpacing: 1 }}
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
                                color: "text.disabled",
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
                                <FoodChip
                                    key={item.name}
                                    emoji={item.emoji}
                                    name={item.name}
                                    reason={item.reason}
                                    type={type}
                                />
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
