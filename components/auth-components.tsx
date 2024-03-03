import { signIn, signOut } from "auth"

export function SignIn({
    provider,
    ...props
}: { provider?: string } & React.ComponentPropsWithRef<"button">) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <button {...props}>Sign In</button>
        </form>
    )
}

export function SignOut(props: React.ComponentPropsWithRef<"button">) {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
            className="w-full"
        >
            <button className="w-full p-0" {...props} />
                Sign Out
        </form>
    )
}
