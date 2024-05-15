
import { PropsWithChildren } from "react"
import { MessageContextProvider } from "../../commons/message/_components/messageContextProvider"
import { SidebarContextProvider } from "../../commons/sidebar/_components/sidebarContextProvider"
import { ThemeContextProvider } from "../../commons/theme/_components/themeContextProvider"
import { WaitingContextProvider } from "../../commons/waiting/_components/waitingContextProvider"

export const AppProvider = ({ children }: PropsWithChildren) => {
    return (<>
        <ThemeContextProvider data-testid="theme-context-provider" >
                    <MessageContextProvider data-testid="message-context-provider" >
                        <SidebarContextProvider data-testid="sidebar-context-provider" >
                            <WaitingContextProvider data-testid="waiting-context-provider" >
                                {children}
                            </WaitingContextProvider>
                        </SidebarContextProvider>
                    </MessageContextProvider>
        </ThemeContextProvider>
    </>)
}