import { ArrowLeft, Shield, Lock, Eye, Users, Database, AlertTriangle } from 'lucide-react';
import logoOMM from '../assets/Logotipo_OMM_v_Branco.png';

const PoliticaPrivacidade = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Voltar ao Site</span>
            </button>
            <img src={logoOMM} alt="OMM" className="h-10" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-cyan-500/20 p-4 rounded-full">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-300">
              Onda Mar e Mato , OMM
            </p>
            <p className="text-gray-400 mt-2">
              Última atualização: 18 de julho de 2025
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Introduction */}
              <div className="prose prose-invert prose-cyan max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Bem,vindo à Política de Privacidade da Onda Mar e Mato. Nós valorizamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais. Este documento descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos as informações que você nos fornece ao utilizar nosso site, produtos e serviços. Ao acessar e utilizar os serviços da Onda Mar e Mato, você concorda com os termos desta Política de Privacidade.
                </p>

                {/* Section 1 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    1. Quem Somos
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    A Onda Mar e Mato é uma empresa dedicada a conectar surfistas com o oceano através de produtos inovadores que promovem a sustentabilidade e a consciência ambiental. Nossa missão é proteger o que amamos, o oceano, e inspirar uma comunidade global de surfistas conscientes. Nosso site é https://ondamaremato.vercel.app/.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-cyan-400 mr-3" />
                    2. Dados Coletados
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços a você. Os dados podem ser fornecidos diretamente por você ou coletados automaticamente durante a sua interação com nosso site e produtos.
                  </p>

                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.1. Informações Fornecidas por Você</h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4 mb-4">
                    <li><strong className="text-white">Dados de Contato:</strong> Nome, endereço de e,mail, número de telefone, endereço postal, etc., quando você se cadastra em nossa newsletter, preenche formulários de contato ou interage conosco por outros meios.</li>
                    <li><strong className="text-white">Dados de Compra:</strong> Informações relacionadas a transações, como detalhes de produtos adquiridos, informações de pagamento (não armazenamos dados completos de cartão de crédito, que são processados por gateways de pagamento seguros), endereço de entrega e histórico de pedidos.</li>
                    <li><strong className="text-white">Comunicações:</strong> Conteúdo de suas comunicações conosco, incluindo e,mails, mensagens de chat e feedback.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.2. Informações Coletadas Automaticamente</h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li><strong className="text-white">Dados de Navegação:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo gasto no site, links clicados, e outras estatísticas de uso. Utilizamos cookies e tecnologias similares para coletar essas informações.</li>
                    <li><strong className="text-white">Dados do Dispositivo:</strong> Informações sobre o dispositivo que você usa para acessar nosso site, como modelo do hardware, identificadores únicos do dispositivo, informações da rede móvel e informações de registro de falhas.</li>
                    <li><strong className="text-white">Dados de Localização:</strong> Podemos coletar informações de localização aproximada com base no seu endereço IP.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                    3. Uso dos Dados
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">Utilizamos os dados coletados para diversas finalidades, incluindo:</p>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li><strong className="text-white">Fornecimento e Melhoria de Serviços:</strong> Para operar, manter, proteger e melhorar nosso site, produtos e serviços, bem como para desenvolver novas funcionalidades.</li>
                    <li><strong className="text-white">Comunicação:</strong> Para enviar newsletters, atualizações, informações sobre produtos, promoções e responder às suas perguntas e solicitações.</li>
                    <li><strong className="text-white">Personalização:</strong> Para personalizar sua experiência em nosso site, apresentando conteúdo e ofertas relevantes com base em seus interesses e comportamento de navegação.</li>
                    <li><strong className="text-white">Segurança:</strong> Para detectar, prevenir e responder a fraudes, abusos, riscos de segurança e atividades ilegais.</li>
                    <li><strong className="text-white">Análise e Pesquisa:</strong> Para entender como nossos usuários interagem com nossos serviços, realizar análises de mercado e pesquisa para aprimorar nossos produtos e estratégias.</li>
                    <li><strong className="text-white">Conformidade Legal:</strong> Para cumprir com obrigações legais e regulatórias, incluindo a Lei Geral de Proteção de Dados (LGPD) no Brasil.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Dados</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Não vendemos, alugamos ou trocamos seus dados pessoais com terceiros para fins de marketing. Podemos compartilhar suas informações nas seguintes situações:
                  </p>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li><strong className="text-white">Provedores de Serviços:</strong> Com empresas terceirizadas que nos auxiliam na operação do nosso negócio, como processamento de pagamentos, entrega de produtos, hospedagem de site, análise de dados e serviços de marketing.</li>
                    <li><strong className="text-white">Parceiros de Negócios:</strong> Com parceiros estratégicos para oferecer produtos ou serviços conjuntos, sempre com o seu consentimento explícito.</li>
                    <li><strong className="text-white">Obrigações Legais:</strong> Quando exigido por lei, ordem judicial ou para cooperar com autoridades governamentais e regulatórias.</li>
                    <li><strong className="text-white">Proteção de Direitos:</strong> Para proteger os direitos, propriedade ou segurança da Onda Mar e Mato, de nossos usuários ou de terceiros.</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                    5. Proteção da Propriedade Intelectual (Cascudo , BR 10 2022 019644,3)
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    O produto "Cascudo" é uma inovação patenteada da Onda Mar e Mato. Isso significa que seu design, funcionalidade e conceito são protegidos por leis de propriedade intelectual. Qualquer imitação, reprodução não autorizada, distribuição ou uso indevido do "Cascudo" ou de suas características distintivas será considerado uma violação de nossos direitos de propriedade intelectual e resultará na tomada de medidas legais cabíveis para proteger nossos interesses e a integridade de nosso produto.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                    6. Segurança dos Dados
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia, firewalls, controles de acesso e procedimentos de segurança internos. No entanto, é importante lembrar que nenhuma transmissão de dados pela internet é 100% segura, e não podemos garantir a segurança absoluta de suas informações.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                  </p>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li><strong className="text-white">Direito de Acesso:</strong> Obter confirmação da existência de tratamento e acesso aos seus dados.</li>
                    <li><strong className="text-white">Direito de Retificação:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                    <li><strong className="text-white">Direito de Eliminação:</strong> Solicitar a eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
                    <li><strong className="text-white">Direito à Portabilidade:</strong> Receber seus dados pessoais em formato estruturado e interoperável.</li>
                    <li><strong className="text-white">Direito de Oposição:</strong> Opor,se ao tratamento de seus dados em determinadas circunstâncias.</li>
                    <li><strong className="text-white">Direito de Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento, sem afetar a legalidade do tratamento realizado antes da revogação.</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Para exercer qualquer um desses direitos, entre em contato conosco através do e,mail ondamaremato@ondamaremato.com.
                  </p>
                </div>

                {/* Remaining sections */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Cookies e Tecnologias Similares</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Utilizamos cookies e outras tecnologias de rastreamento para melhorar sua experiência em nosso site, analisar o tráfego, personalizar conteúdo e anúncios, e entender de onde nossos visitantes vêm. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. A desativação de cookies pode afetar a funcionalidade de algumas partes do nosso site.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Links para Sites de Terceiros</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Nosso site pode conter links para sites de terceiros. Esta Política de Privacidade não se aplica a esses sites. Recomendamos que você revise as políticas de privacidade de qualquer site de terceiros antes de fornecer suas informações pessoais.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Alterações a Esta Política de Privacidade</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de dados ou em requisitos legais. Notificaremos você sobre quaisquer alterações significativas publicando a nova política em nosso site e atualizando a data da "Última atualização". Recomendamos que você revise esta política regularmente.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas práticas de dados, entre em contato conosco:
                    </p>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                      <p className="text-white font-semibold">Onda Mar e Mato</p>
                      <p className="text-cyan-300">E,mail: ondamaremato@ondamaremato.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;

