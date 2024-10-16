import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Link } from '../../../components/Link'

export function SignIn() {
  return (
    <div style={{ width: 600 }}>
      <h1>Faça seu Login</h1>
      <p>
        Não tem uma conta?
        <Link color="secondary" to="/">
          Cadastre-se
        </Link>
      </p>
      <Input
        id="email"
        label="Email"
        type="email"
        error="Email é obrigatório"
      />
      <Input id="password" label="Senha" type="password" />
      <Button $fullwidth={true}>Entrar</Button>
    </div>
  )
}
