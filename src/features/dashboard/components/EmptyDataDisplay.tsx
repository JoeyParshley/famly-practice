import { Stack, Typography, Button } from "@mui/material";

type EmptyDataDisplayProps = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onActionClick?: () => void;
};

export default function EmptyDataDisplay({
  title = "Nothing here yet",
  message = "We couldn’t find any household data to display.",
  actionLabel,
  onActionClick,
}: EmptyDataDisplayProps) {
  return (
    <Stack spacing={2} alignItems="center" sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" maxWidth={420}>
        {message}
      </Typography>

      {actionLabel && (
        <Button variant="contained" size="small" onClick={onActionClick}>
          {actionLabel}
        </Button>
      )}
    </Stack>
  );
}
