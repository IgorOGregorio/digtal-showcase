import Link from "next/link";
import {
  ChevronRight,
  ShoppingBag,
  Truck,
  CreditCard,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/testimonial-card";
import { Newsletter } from "@/components/newsletter";
import ProductCarousel from "@/components/product-carousel";
import FeaturedCarousel from "@/components/featured-carousel";
import CategoryShowcase from "@/components/category-showcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold inline-block">Vitrine Digital</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#produtos"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Produtos
              </Link>
              <Link
                href="#beneficios"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Benefícios
              </Link>
              <Link
                href="#depoimentos"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Entrar
            </Button>
            <Button size="sm">
              Cadastre-se
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="w-full py-6 md:py-12 bg-gradient-to-r from-rose-100 to-teal-100">
          <div className="container px-4 md:px-6">
            <FeaturedCarousel />
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="beneficios"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Por que escolher nossa Vitrine Digital?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transforme sua presença online e aumente suas vendas com nossa
                  plataforma completa
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-rose-100">
                    <ShoppingBag className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold">Catálogo Profissional</h3>
                  <p className="text-muted-foreground">
                    Exiba seus produtos de forma atraente com fotos de alta
                    qualidade e descrições detalhadas.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-teal-100">
                    <Truck className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Gestão de Pedidos</h3>
                  <p className="text-muted-foreground">
                    Acompanhe pedidos, gerencie estoque e organize entregas em
                    uma única plataforma.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Pagamentos Seguros</h3>
                  <p className="text-muted-foreground">
                    Ofereça múltiplas opções de pagamento com total segurança
                    para seus clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explore por Categorias
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encontre exatamente o que você procura em nossas categorias
                </p>
              </div>
            </div>
            <CategoryShowcase />
          </div>
        </section>

        {/* Featured Products Section with Carousel */}
        <section
          id="produtos"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Produtos em Destaque
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça alguns dos produtos mais populares em nossa vitrine
                </p>
              </div>
            </div>
            <ProductCarousel />
            <div className="flex justify-center mt-10">
              <Button size="lg" variant="outline">
                Ver Todos os Produtos
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="depoimentos"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  O que nossos clientes dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja como nossa Vitrine Digital tem ajudado empreendedores a
                  crescer
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <TestimonialCard
                name="Ana Silva"
                role="Proprietária, Moda Elegante"
                content="Desde que comecei a usar a Vitrine Digital, minhas vendas aumentaram em 70%. A plataforma é intuitiva e os clientes adoram a experiência de compra."
                avatar="/placeholder.svg?height=100&width=100"
                rating={5}
              />
              <TestimonialCard
                name="Carlos Oliveira"
                role="CEO, Tech Store"
                content="A melhor decisão que tomei para o meu negócio. O suporte é excelente e a plataforma oferece todas as ferramentas que precisamos para vender online."
                avatar="/placeholder.svg?height=100&width=100"
                rating={5}
              />
              <TestimonialCard
                name="Mariana Costa"
                role="Artesã, Arte & Cia"
                content="Consegui expandir meu negócio para todo o Brasil graças à Vitrine Digital. Fácil de usar e com ótimas ferramentas de marketing."
                avatar="/placeholder.svg?height=100&width=100"
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para transformar seu negócio?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comece hoje mesmo e ganhe 30 dias grátis na nossa plataforma
                  completa
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-gray-100"
                >
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-rose-800"
                >
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="contato"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
        >
          <div className="container px-4 md:px-6">
            <Newsletter />
          </div>
        </section>
      </main>
      <footer className="flex flex-col w-full  border-t bg-gradient-to-r from-rose-100 to-teal-100 px-6  md:px-10">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Novidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Promoções
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Mais vendidos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Imprensa
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Guias
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Tutoriais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Vendas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Parcerias
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm font-medium">Vitrine Digital</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Vitrine Digital. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
