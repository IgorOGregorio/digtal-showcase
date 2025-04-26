import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fique por dentro das novidades</h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Assine nossa newsletter e receba dicas, promoções exclusivas e atualizações da plataforma
        </p>
      </div>
      <div className="w-full max-w-md space-y-2">
        <form className="flex w-full max-w-sm flex-col gap-2 sm:flex-row sm:max-w-md mx-auto">
          <Input type="email" placeholder="Seu melhor e-mail" className="flex-1" />
          <Button type="submit">Assinar</Button>
        </form>
        <p className="text-xs text-muted-foreground">
          Ao assinar, você concorda com nossa Política de Privacidade e Termos de Uso.
        </p>
      </div>
    </div>
  )
}
