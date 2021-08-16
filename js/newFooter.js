class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <p>Built with</p>
         <a href="https://bulma.io/" title="Bulma CSS" target='blank'><i class="devicon-bulma-plain"></i></a>
        <br>
        <p>My links</p>
        <br>
        <a href="mailto:alexhaefner@live.com"><img src="img/icons/email.png" title="Email me" width="16px"></img></i></a> /
        <a href="https://www.linkedin.com/in/alexhaefner/" title="My Linkedin" target='blank'><img src="img/icons/linkedin.png" width="16px"></img></a> /
        <a href="https://www.youtube.com/user/bellevueuniversity" title="Bellevue University's Youtube"  target='blank'><img src="img/icons/youtube.png" width="16px"></img></a> 
        <br>
        <a href="https://github.com/AlexH893" title="My GitHub"  target='blank'><img src="img/icons/github.png" width="16px"></img></a> /
        <a href="https://github.com/buwebdev" title="Courses Repository"  target='blank'><img src="img/icons/github.png" width="16px"></img></a>


     </div>
        `;
    }
}

customElements.define("footer-component", Footer);