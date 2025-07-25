import { ArrowLeft, FileText, Scale, Shield } from 'lucide-react';
import logoOMM from '../assets/Logotipo_OMM_v_Branco.png';

const TermosUso = ({ onBack }) => {
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
                <Scale className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termos de Uso
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
                  Bem,vindo aos Termos de Uso da Onda Mar e Mato. Este documento estabelece as regras e condições para o uso do nosso site, produtos e serviços. Ao acessar ou utilizar qualquer parte do nosso site ou adquirir nossos produtos, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com estes termos, por favor, não utilize nossos serviços.
                </p>

                {/* Section 1 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                    1. Aceitação dos Termos
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Ao acessar e utilizar o site da Onda Mar e Mato (https://ondamaremato.vercel.app/), você declara ter lido, compreendido e aceito estes Termos de Uso em sua totalidade. Estes Termos podem ser atualizados periodicamente, e a sua continuidade no uso do site após as alterações implica na aceitação dos novos termos. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer modificações.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">2. Definições</h2>
                  <ul className="text-gray-300 leading-relaxed space-y-2">
                    <li><strong className="text-white">Onda Mar e Mato (OMM):</strong> Refere,se à empresa, seus produtos, serviços, site e toda a sua propriedade intelectual.</li>
                    <li><strong className="text-white">Usuário:</strong> Qualquer pessoa física ou jurídica que acessa ou utiliza o site, produtos ou serviços da Onda Mar e Mato.</li>
                    <li><strong className="text-white">Site:</strong> O site da Onda Mar e Mato, acessível em https://ondamaremato.vercel.app/.</li>
                    <li><strong className="text-white">Produtos:</strong> Inclui, mas não se limita ao "Cascudo", posts, propriedade intelectual e quaisquer outros itens oferecidos pela Onda Mar e Mato.</li>
                    <li><strong className="text-white">Serviços:</strong> Todas as funcionalidades, informações e recursos disponibilizados através do site da Onda Mar e Mato.</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">3. Uso do Site e Conteúdo</h2>
                  
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">3.1. Acesso e Disponibilidade</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    O site da Onda Mar e Mato é disponibilizado para seu uso pessoal e não comercial. Embora nos esforcemos para garantir a disponibilidade contínua do site, não garantimos que ele estará sempre acessível ou livre de erros. Reservamo,nos o direito de suspender, retirar ou alterar qualquer parte do site sem aviso prévio.
                  </p>

                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">3.2. Propriedade Intelectual do Conteúdo</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Todo o conteúdo presente no site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Onda Mar e Mato ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais e outras leis de propriedade intelectual. A identidade visual e o logotipo da Onda Mar e Mato são marcas registradas e não podem ser utilizados sem nossa permissão expressa por escrito.
                  </p>

                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">3.3. Uso Proibido</h3>
                  <p className="text-gray-300 leading-relaxed mb-2">Você concorda em não:</p>
                  <ul className="text-gray-300 leading-relaxed space-y-2 ml-4">
                    <li>• Reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do site ou de seu conteúdo para fins comerciais sem nossa permissão expressa por escrito.</li>
                    <li>• Utilizar o site de qualquer forma que possa danificar, desabilitar, sobrecarregar ou prejudicar o site ou interferir no uso de terceiros.</li>
                    <li>• Tentar obter acesso não autorizado a qualquer parte do site, contas de usuários, sistemas de computador ou redes conectadas ao site.</li>
                    <li>• Utilizar qualquer robô, spider, outro dispositivo automático ou processo manual para monitorar ou copiar qualquer parte do site ou de seu conteúdo.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                    4. O Produto "Cascudo" e Proteção de Patente
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    O "Cascudo" é um produto inovador desenvolvido e patenteado pela Onda Mar e Mato. A patente (BR 10 2022 019644,3) confere à Onda Mar e Mato direitos exclusivos sobre a invenção, impedindo que terceiros fabriquem, usem, vendam ou importem o produto sem nossa autorização. A violação desses direitos de patente, incluindo a imitação, reprodução não autorizada, distribuição ou uso indevido do "Cascudo" ou de suas características distintivas, constitui uma infração grave e sujeitará o infrator às penalidades previstas em lei, incluindo ações judiciais para reparação de danos e cessação da infração.
                  </p>
                </div>

                {/* Remaining sections */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Links para Sites de Terceiros</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Nosso site pode conter links para sites de terceiros que não são operados ou controlados pela Onda Mar e Mato. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas de segurança desses sites. A inclusão de qualquer link não implica endosso por parte da Onda Mar e Mato. Recomendamos que você revise os termos de uso e políticas de privacidade de qualquer site de terceiros antes de interagir com eles.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Isenção de Garantias e Limitação de Responsabilidade</h2>
                    <p className="text-gray-300 leading-relaxed">
                      O site, produtos e serviços da Onda Mar e Mato são fornecidos "como estão" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o site será ininterrupto, livre de erros ou seguro. Em nenhuma circunstância a Onda Mar e Mato será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar o site, produtos ou serviços, mesmo que a Onda Mar e Mato tenha sido avisada da possibilidade de tais danos.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Indenização</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Você concorda em indenizar, defender e isentar a Onda Mar e Mato, seus diretores, funcionários, agentes e afiliados de e contra todas e quaisquer reivindicações, responsabilidades, danos, perdas e despesas, incluindo honorários advocatícios razoáveis, decorrentes ou de alguma forma relacionados ao seu acesso ou uso do site, sua violação destes Termos de Uso, ou sua violação de quaisquer direitos de terceiros.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">8. Legislação Aplicável e Foro</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Você concorda que qualquer disputa ou controvérsia decorrente ou relacionada a estes Termos de Uso será submetida ao foro da comarca de [São Paulo/SP], Brasil, com exclusão de qualquer outro, por mais privilegiado que seja.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">9. Disposições Gerais</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível, essa disposição será interpretada de forma a refletir a intenção original das partes, e as demais disposições permanecerão em pleno vigor e efeito. A falha da Onda Mar e Mato em exercer ou fazer cumprir qualquer direito ou disposição destes Termos de Uso não constituirá uma renúncia a tal direito ou disposição.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">10. Contato</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco:
                    </p>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-4">
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

export default TermosUso;

