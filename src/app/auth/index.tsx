import { useState } from "react";
import AuthForm from "../../modules/auth/ui/AuthForm";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register");

  return <AuthForm mode={mode} onChangeMode={setMode} />
}