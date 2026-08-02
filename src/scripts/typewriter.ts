document.addEventListener('DOMContentLoaded', () => {
    const terminals = document.querySelectorAll('.js-terminal');

    terminals.forEach((terminal) => {
        
        const typewriter = terminal.querySelector('.js-typewriter');
        const cursor = terminal.querySelector('.cursor') as HTMLElement;
        const terminalBody = terminal.querySelector('.js-terminal-body') as HTMLElement;

        if (!typewriter || !cursor || !terminalBody) return;

        const codeToType = terminal.getAttribute('data-code');
        if (!codeToType) return;

        let i = 0;
        let isTyping = false;

        function typeWriter() {
            if (i < codeToType.length) {
                let char = codeToType.charAt(i);
                let delay = Math.random() * 10 + 2; 

                if (char === '<') char = '&lt;';
                else if (char === '>') char = '&gt;';
                else if (char === '\n') {
                    char = '<br>';
                    delay = 400; 
                }
                
                typewriter!.innerHTML += char;
                i++;
                
                setTimeout(typeWriter, delay);
            } else {
                setTimeout(() => {
                    terminalBody.style.opacity = '0'; 
                    
                    setTimeout(() => {
                        terminal.classList.add('is-rendered');
                        typewriter!.innerHTML = terminal.getAttribute('data-render') || '';
                        cursor.style.display = 'none'; 
                        terminalBody.style.opacity = '1'; 
                    }, 400);

                }, 1000); 
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isTyping) {
                    isTyping = true;
                    setTimeout(typeWriter, 500);
                    observer.unobserve(terminal);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(terminal);
    });
});