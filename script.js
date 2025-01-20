document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        const content = document.getElementById('content');

        if (loading) loading.style.display = 'none';
        if (content) {
            content.style.display = 'block'; // Mostra o conteúdo
            content.classList.add('reveal'); // Aplica a animação de revelação
        }

        // Atrasar a digitação para ocorrer depois da revelação do conteúdo
        setTimeout(typeWriter, 1000); // Espera 1 segundo após a revelação
    }, 7000); // Aumenta o tempo de espera para 7 segundos até exibir o conteúdo
});

function typeWriter() {
    const text = `Muito obrigado por apontar o seu 
    celular para este QR Code!

    Você acaba de se conectar 
    com algo muito especial!
    
    Somos o Bloco Eu Sou Eu 
    e com sua atitude, 
    você faz parte dessa 
    energia contagiante!

    Agradecemos por estar 
    conosco nesta jornada 
    de celebração, união e
    autoestima.

    Fique ligado, muitas 
    surpresas e momentos 
    incríveis estão por vir!
    
    E lembre-se sempre:

    FOCO, FORÇA E FÉ.`; // Novo texto com quebras de linha

    let i = 0;
    const element = document.getElementById("typed-text");
    element.style.opacity = 1; // Torna o texto visível para a digitação

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                element.innerHTML += '<br>'; // Adiciona uma quebra de linha
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;

            // Rolagem automática mais suave
            element.scrollIntoView({ behavior: 'smooth', block: 'end' });

            setTimeout(type, 86); // A cada 50ms, adiciona uma letra
        }
    }

    type(); // Inicia a animação de digitação
}
