// ==================== Navigation Toggle ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== Typing Effect ====================
const typingText = document.getElementById('typing-text');
const messages = [
    'Finding vulnerabilities...',
    'Breaking systems ethically...',
    'Building secure solutions...',
    'Hunting bugs & bounties...'
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentMessage = messages[messageIndex];

    if (isDeleting) {
        typingText.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        typingSpeed = 500; // Pause before next message
    }

    setTimeout(typeEffect, typingSpeed);
}

if (typingText) {
    setTimeout(typeEffect, 1000);
}

// ==================== Modal System ====================
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Modal content data
const modalContent = {
    // 교육 모달
    'training-1': {
        title: '웹 해킹 심화 과정',
        date: '2023.01 - 2023.03',
        institution: 'OO보안아카데미',
        description: '웹 애플리케이션 보안 심화 교육 과정을 이수하였습니다.',
        details: [
            'OWASP Top 10 취약점에 대한 심화 학습',
            'SQL Injection, XSS, CSRF 등 주요 취약점 실습',
            '모의해킹 프로젝트를 통한 실전 경험',
            '취약점 분석 및 보고서 작성 역량 강화'
        ],
        skills: ['SQL Injection', 'XSS', 'CSRF', 'Authentication Bypass', 'Session Hijacking'],
        certificate: '이수증을 확인하려면 여기를 클릭하세요'
    },
    'training-2': {
        title: '모의해킹 전문가 과정',
        date: '2023.06 - 2023.08',
        institution: 'XX정보보호교육센터',
        description: '실전 모의해킹 역량을 강화하는 전문가 과정을 이수하였습니다.',
        details: [
            '침투 테스트 방법론 (PTES, OWASP) 학습',
            '네트워크 보안 진단 및 취약점 분석',
            '보안 솔루션 우회 기법 연구',
            '실제 환경을 모방한 모의해킹 실습'
        ],
        skills: ['Penetration Testing', 'Metasploit', 'Nmap', 'Burp Suite', 'Network Security'],
        certificate: '이수증을 확인하려면 여기를 클릭하세요'
    },
    'training-3': {
        title: 'Bug Bounty 헌터 과정',
        date: '2023.09 - 2023.11',
        institution: '온라인 보안 교육 플랫폼',
        description: '버그바운티 활동을 위한 실전 교육을 이수하였습니다.',
        details: [
            '취약점 리서치 방법론 및 도구 활용',
            'PoC (Proof of Concept) 작성 및 검증',
            '효과적인 보고서 작성 및 커뮤니케이션',
            '실제 버그바운티 플랫폼 참여 경험'
        ],
        skills: ['Bug Bounty', 'Vulnerability Research', 'PoC Development', 'Security Reporting'],
        certificate: '이수증을 확인하려면 여기를 클릭하세요'
    },
    // 프로젝트 모달
    'project-1': {
        title: '웹 취약점 자동 스캐너',
        type: 'Web Security',
        period: '2023.03 - 2023.05',
        description: 'Python 기반의 웹 애플리케이션 취약점 자동 탐지 도구를 개발하였습니다.',
        details: [
            'SQL Injection, XSS 등 주요 웹 취약점 자동 탐지',
            '크롤링 기능을 통한 전체 사이트 스캔',
            '취약점 발견 시 상세 리포트 생성',
            'False Positive를 줄이기 위한 검증 로직 구현'
        ],
        tech: ['Python', 'BeautifulSoup', 'Requests', 'SQLMap', 'Selenium'],
        achievements: [
            '실제 테스트 환경에서 90% 이상의 탐지율 달성',
            '기존 도구 대비 40% 빠른 스캔 속도 구현',
            'GitHub에서 50+ stars 획득'
        ],
        github: 'https://github.com/yourusername/web-scanner',
        demo: '#'
    },
    'project-2': {
        title: '모의해킹 자동화 프레임워크',
        type: 'Penetration Testing',
        period: '2023.06 - 2023.08',
        description: '모의해킹 과정을 자동화하고 효율화하는 통합 프레임워크를 개발하였습니다.',
        details: [
            '정보 수집, 취약점 스캔, 침투 테스트 자동화',
            'Metasploit, Nmap 등 기존 도구와의 통합',
            '진행 상황 및 결과를 시각화하는 대시보드 제공',
            '커스터마이징 가능한 모듈식 구조 설계'
        ],
        tech: ['Python', 'Metasploit', 'Nmap', 'Flask', 'PostgreSQL'],
        achievements: [
            '모의해킹 소요 시간 60% 단축',
            '일관성 있는 테스트 프로세스 확립',
            '보안팀에서 실제 업무에 활용 중'
        ],
        github: 'https://github.com/yourusername/pentest-framework',
        demo: '#'
    },
    'project-3': {
        title: 'XSS 취약점 탐지 도구',
        type: 'Bug Bounty',
        period: '2023.09 - 2023.10',
        description: 'DOM-based XSS를 포함한 다양한 XSS 취약점을 자동으로 탐지하고 PoC를 생성하는 도구입니다.',
        details: [
            'Reflected, Stored, DOM-based XSS 탐지',
            '다양한 인코딩 및 우회 기법 자동 테스트',
            '발견된 취약점의 PoC 자동 생성',
            'WAF 우회를 위한 페이로드 변형 기능'
        ],
        tech: ['JavaScript', 'Node.js', 'Puppeteer', 'Chrome DevTools Protocol'],
        achievements: [
            '버그바운티에서 3건의 XSS 취약점 발견 및 보상 획득',
            'DOM-based XSS 탐지율 85% 달성',
            '다양한 WAF 우회 페이로드 데이터베이스 구축'
        ],
        github: 'https://github.com/yourusername/xss-hunter',
        demo: '#'
    },
    'project-4': {
        title: 'API 보안 테스트 도구',
        type: 'Research',
        period: '2023.11 - 2023.12',
        description: 'RESTful API의 보안 취약점을 진단하고 상세한 보고서를 생성하는 도구입니다.',
        details: [
            '인증/인가 취약점 자동 탐지',
            'Rate Limiting, CORS 설정 등 보안 정책 검증',
            'JWT 토큰 분석 및 취약점 점검',
            'API 엔드포인트 자동 매핑 및 테스트'
        ],
        tech: ['Python', 'Flask', 'JWT', 'OpenAPI/Swagger', 'Postman'],
        achievements: [
            '20개 이상의 API 보안 체크리스트 구현',
            'OWASP API Security Top 10 기반 테스트',
            '실제 프로젝트에서 5건의 중요 취약점 발견'
        ],
        github: 'https://github.com/yourusername/api-security-tester',
        demo: '#'
    }
};

function openModal(contentId) {
    const content = modalContent[contentId];
    if (!content) return;

    let html = '';

    // 교육 모달
    if (contentId.startsWith('training-')) {
        html = `
            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${content.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">
                <strong>교육기관:</strong> ${content.institution}
            </p>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                <strong>기간:</strong> ${content.date}
            </p>
            <p style="line-height: 1.8; margin-bottom: 2rem;">${content.description}</p>

            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">📚 주요 학습 내용</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                ${content.details.map(detail => `
                    <li style="padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; color: var(--text-secondary);">
                        <span style="position: absolute; left: 0; color: var(--primary-color);">▹</span>
                        ${detail}
                    </li>
                `).join('')}
            </ul>

            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">🛠️ 습득 기술</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                ${content.skills.map(skill => `
                    <span style="padding: 0.4rem 1rem; background: rgba(255, 107, 53, 0.1); border: 1px solid var(--primary-color); border-radius: 20px; font-size: 0.9rem; color: var(--primary-color);">
                        ${skill}
                    </span>
                `).join('')}
            </div>

            <div style="padding: 1rem; background: rgba(0, 255, 136, 0.05); border-left: 3px solid var(--accent-color); border-radius: 4px;">
                <p style="color: var(--accent-color); margin: 0;">📜 ${content.certificate}</p>
            </div>
        `;
    }
    // 프로젝트 모달
    else if (contentId.startsWith('project-')) {
        html = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                <h2 style="color: var(--primary-color); margin: 0;">${content.title}</h2>
                <span style="padding: 0.4rem 1rem; background: rgba(255, 107, 53, 0.1); border: 1px solid var(--primary-color); border-radius: 20px; font-size: 0.9rem; color: var(--primary-color);">
                    ${content.type}
                </span>
            </div>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                <strong>개발 기간:</strong> ${content.period}
            </p>
            <p style="line-height: 1.8; margin-bottom: 2rem;">${content.description}</p>

            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">💡 주요 기능</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                ${content.details.map(detail => `
                    <li style="padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; color: var(--text-secondary);">
                        <span style="position: absolute; left: 0; color: var(--primary-color);">▹</span>
                        ${detail}
                    </li>
                `).join('')}
            </ul>

            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">🔧 기술 스택</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                ${content.tech.map(tech => `
                    <span style="padding: 0.4rem 1rem; background: rgba(255, 107, 53, 0.1); border: 1px solid var(--primary-color); border-radius: 20px; font-size: 0.9rem; color: var(--primary-color);">
                        ${tech}
                    </span>
                `).join('')}
            </div>

            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">🏆 주요 성과</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                ${content.achievements.map(achievement => `
                    <li style="padding-left: 1.5rem; position: relative; margin-bottom: 0.5rem; color: var(--text-secondary);">
                        <span style="position: absolute; left: 0; color: var(--accent-color);">✓</span>
                        ${achievement}
                    </li>
                `).join('')}
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="${content.github}" target="_blank" style="padding: 0.8rem 1.5rem; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: var(--transition);">
                    GitHub 보기
                </a>
                <a href="${content.demo}" target="_blank" style="padding: 0.8rem 1.5rem; background: transparent; color: var(--primary-color); border: 2px solid var(--primary-color); text-decoration: none; border-radius: 8px; font-weight: 600; transition: var(--transition);">
                    데모 보기
                </a>
            </div>
        `;
    }

    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for cards and projects
document.querySelectorAll('[data-modal]').forEach(element => {
    element.addEventListener('click', () => {
        const modalId = element.getAttribute('data-modal');
        openModal(modalId);
    });
});

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ==================== Scroll Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('.timeline-item, .card, .activity-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== Navbar Scroll Effect ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ==================== Smooth Scroll for Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Active Navigation Link ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c🔒 Security Researcher Portfolio', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
console.log('%c안전한 웹 환경을 만들어갑니다.', 'color: #00ff88; font-size: 14px;');
