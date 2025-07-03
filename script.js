// Say Hai function
function sayHai() {
    alert("Hai Indra🤌")
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu")
    mobileMenu.classList.toggle("hidden")
}

// Contact form submission
function handleSubmit(event) {
    event.preventDefault()
    alert("Thank you for your message! I will get back to you soon.")
    event.target.reset()
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("a[href^='#']")

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                })

                // Close mobile menu if open
                const mobileMenu = document.getElementById("mobile-menu")
                mobileMenu.classList.add("hidden")
            }
        })
    })

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector("nav")
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = "rgba(33, 37, 41, 0.95)"
            navbar.style.backdropFilter = "blur(10px)"
        } else {
            navbar.style.backgroundColor = "#212529"
            navbar.style.backdropFilter = "none"
        }
    })

    // Typewriter effect
    const typewriterElement = document.getElementById("typewriter-text")
    const text = "I'm interested to develop websites"
    let index = 0

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent = text.slice(0, index + 1)
            index++
            setTimeout(typeWriter, 100)
        }
    }

    // Start typewriter effect after a delay
    setTimeout(typeWriter, 1000)

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
            }
        })
    }, observerOptions)

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll(".group, .flex.items-center.space-x-4")
    animateElements.forEach((el) => {
        el.style.opacity = "0"
        el.style.transform = "translateY(20px)"
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(el)
    })

    // Project card hover effects
    const projectCards = document.querySelectorAll(".group")
    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-8px)"
        })

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)"
        })
    })

    // Add active state to navigation links
    const sections = document.querySelectorAll("section[id]")

    window.addEventListener("scroll", () => {
        let current = ""
        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute("id")
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove("text-yellow")
            link.classList.add("text-light")
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.remove("text-light")
                link.classList.add("text-yellow")
            }
        })
    })

    // Add loading animation
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"

    window.addEventListener("load", () => {
        document.body.style.opacity = "1"
    })

    // Parallax effect for hero section
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const parallax = document.querySelector(".relative.z-10")
        if (parallax) {
            const speed = scrolled * 0.5
            parallax.style.transform = `translateY(${speed}px)`
        }
    })

    // Smooth reveal animation for skills
    const skillItems = document.querySelectorAll(".flex.items-center.space-x-3")

    skillItems.forEach((item, index) => {
        item.style.opacity = "0"
        item.style.transform = "translateX(-20px)"
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1"
                    entry.target.style.transform = "translateX(0)"
                }
            })
        })

        observer.observe(item)
    })
})
