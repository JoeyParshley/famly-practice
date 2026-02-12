import { Typography, Stack } from "@mui/material";
import { type Member } from "../../../api/famly"


export default function MembersList({ members }: { members: Member[] }) {
    return (
        <div>
            <Typography variant="subtitle2" fontWeight={600}>
                Members
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                {members.map((member: Member) => (
                    <Typography key={member.id} variant="body2">
                        <b>{member.name}</b> - {member.role}
                    </Typography>
                ))}
            </Stack>
        </div>
    );
}