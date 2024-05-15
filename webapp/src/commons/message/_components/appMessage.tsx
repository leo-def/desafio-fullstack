'use client'

import { Alert, AlertTitle, Snackbar } from "@mui/material"
import { useGetMessages } from "../_hooks/useGetMessages"
import { useRemoveMessage } from "../_hooks/useRemoveMessage"
import { Message } from "../_types/message";


export const AppMessage = () => {
    const vertical = 'top';
    const horizontal = 'center';
    const messages = useGetMessages();
    const removeMessage = useRemoveMessage();
    return (<>{messages.map((message: Message) => <Snackbar
        key={message.id}
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        autoHideDuration={message.duration}
        onClose={() => removeMessage(message)}
    >
        <Alert
            variant={message.variant}
            severity={message.severity}
            sx={{ width: '100%' }}
            onClose={() => removeMessage(message)}>
            {(message.title ? <AlertTitle>{message.title}</AlertTitle> : null)}
            {message.body}
        </Alert>
    </Snackbar>)}</>)

}