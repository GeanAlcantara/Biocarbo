import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como os dados são tratados na landing page da Biocarbo.",
  alternates: {
    canonical: "/privacidade"
  }
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="container legal-header__inner">
          <Link href="/" aria-label="Voltar para a página inicial da Biocarbo">
            <Image
              src="/images/logo-biocarbo.svg"
              alt="Biocarbo"
              width={160}
              height={48}
              priority
            />
          </Link>
          <Link className="text-link" href="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="container legal-content">
        <div className="legal-content__heading">
          <span>
            <ShieldCheck size={22} aria-hidden="true" />
          </span>
          <p className="eyebrow">Privacidade e transparência</p>
          <h1>Política de Privacidade</h1>
          <p>Última atualização: 29 de julho de 2026.</p>
        </div>

        <section>
          <h2>1. Como esta página trata seus dados</h2>
          <p>
            O formulário comercial desta landing page não possui banco de dados
            próprio. Ao selecionar “Enviar pelo WhatsApp”, as informações
            preenchidas são usadas no seu navegador apenas para montar uma
            mensagem. Você pode revisar essa mensagem antes de enviá-la.
          </p>
        </section>

        <section>
          <h2>2. Redirecionamento para o WhatsApp</h2>
          <p>
            Depois do redirecionamento, o envio e o tratamento da conversa
            passam a ocorrer no WhatsApp. A plataforma possui regras e política
            de privacidade próprias. O envio da mensagem só acontece após sua
            confirmação no aplicativo ou na versão web.
          </p>
          <a
            className="text-link"
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Consultar a política do WhatsApp
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </section>

        <section>
          <h2>3. Dados técnicos e segurança</h2>
          <p>
            O serviço de hospedagem pode processar registros técnicos essenciais
            — como endereço IP, tipo de navegador, data e rota acessada — para
            entrega da página, prevenção de abuso, diagnóstico e segurança.
            Esses registros não são usados pelo formulário para criar perfis de
            marketing.
          </p>
        </section>

        <section>
          <h2>4. Links externos</h2>
          <p>
            A página contém links para páginas institucionais, documentos e
            canais externos. Cada destino é responsável por suas próprias
            práticas de privacidade e segurança.
          </p>
        </section>

        <section>
          <h2>5. Seus direitos e contato</h2>
          <p>
            Para solicitar informações, correção ou exclusão de dados enviados
            diretamente à Biocarbo, entre em contato e informe os dados
            necessários para localizar o atendimento.
          </p>
          <a className="legal-contact" href="mailto:biocarbo@biocarbo.com">
            <Mail size={18} aria-hidden="true" />
            biocarbo@biocarbo.com
          </a>
        </section>
      </article>
    </main>
  );
}
