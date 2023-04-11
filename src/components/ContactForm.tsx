
import TextField from '@mui/material/TextField';

export default function ContactForm() {
    return (
        <div>
            <div>CONTACT</div>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
        </div>
    );
}