const app = document.querySelector("#app");
const modal = document.querySelector("#modal");
const userProfile = {
  name: localStorage.getItem("skillbridge-name") || "Thandi Nkosi"
};

const pageFiles = {
  home: "index.html",
  services: "services.html",
  internships: "internships.html",
  about: "about.html",
  contact: "contact.html",
  profile: "profile.html",
  upgrade: "upgrade.html",
  signin: "signin.html",
  signup: "signup.html",
  book: "booking.html",
  servicepayment: "service-payment.html",
  editprofile: "edit-profile.html",
  apply: "apply.html",
  payment: "plan-payment.html",
  "escrow-confirm": "escrow-confirm.html"
};

function go(page) {
  location.href = pageFiles[page] || "index.html";
}

const home = () => `
  <section class="hero">
    <div class="hero-inner">
      <div class="eyebrow">Made for South African opportunity</div>
      <h1>Where <em>talent</em>, business and community move forward.</h1>
      <p>SkillBridge is the trusted place to find local services, grow a business and turn skills into meaningful employment.</p>
      <div class="hero-actions">
        <button class="btn" data-route="services">Find a service →</button>
        <button class="btn btn-outline" data-route="signup">I offer a service</button>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="stat"><strong>1,200+</strong><span>Skilled local providers</span></div>
    <div class="stat"><strong>450+</strong><span>Businesses growing with us</span></div>
    <div class="stat"><strong>300+</strong><span>Student opportunities</span></div>
  </section>

  <section class="section">
    <div class="section-heading">
      <div>
        <div class="eyebrow">One platform, real possibility</div>
        <h2>Built for everyone who wants to move forward.</h2>
      </div>
      <p>Find trusted local services, grow a business, or begin your career journey.</p>
    </div>

    <div class="cards">
      <article class="card">
        <div class="icon">⌕</div>
        <h3>For customers</h3>
        <p>Search trusted providers, compare reviews, book and pay securely.</p>
        <button data-route="services">Find a service →</button>
      </article>

      <article class="card">
        <div class="icon">↗</div>
        <h3>For businesses</h3>
        <p>Create a professional presence and reach more customers.</p>
        <button data-route="signup">Grow your business →</button>
      </article>

      <article class="card">
        <div class="icon">✦</div>
        <h3>For students</h3>
        <p>Show your skills and apply directly for internships.</p>
        <button data-route="internships">Find opportunities →</button>
      </article>
    </div>
  </section>
`;

const services = () => `
  <section class="page-hero">
    <h1>Find the right person for the job.</h1>
    <p>Browse trusted, reviewed professionals and book directly.</p>
  </section>

  <section class="section">
    <div class="filters">
      <button class="filter active">All services</button>
      <button class="filter">Home & repairs</button>
      <button class="filter">Creative</button>
      <button class="filter">Beauty & wellness</button>
    </div>

    <div class="service-grid">
      ${[
        ["🛠", "Home repairs", "Mandla Maintenance", "From R350"],
        ["🎨", "Graphic design", "Ndlovu Creative Studio", "From R500"],
        ["💇🏾", "Beauty & wellness", "Glow by Zinhle", "From R280"],
        ["📷", "Photography", "Capture Cape Town", "From R900"],
        ["💻", "IT support", "TechFix SA", "From R400"],
        ["🌿", "Garden services", "Green Hands", "From R250"]
      ].map(service => `
        <article class="service">
          <div class="service-top">${service[0]}</div>
          <div class="service-body">
            <span class="tag">Verified provider</span>
            <h3>${service[1]}</h3>
            <p>${service[2]} · ★ 4.8 (24)</p>
            <div class="service-footer">
              <strong>${service[3]}</strong>
              <button class="btn" data-route="book">Book</button>
            </div>
          </div>
        </article>
      `).join("")}
    </div>

    <div class="notice" style="margin-top:32px">
      SkillBridge deducts a 20% platform fee from completed provider payments.
    </div>
  </section>
`;

const internships = () => `
  <section class="page-hero">
    <h1>Start your career with confidence.</h1>
    <p>Discover internships and entry-level opportunities.</p>
  </section>

  <section class="section">
    ${[
      ["BC", "Junior Marketing Intern", "Brightside Communications", "Johannesburg · 6 months"],
      ["TD", "Software Development Intern", "TechDrive SA", "Hybrid · 12 months"],
      ["NL", "Business Administration Intern", "NewLeaf Group", "Pretoria · 12 months"]
    ].map(job => `
      <article class="intern-card">
        <div class="company-logo">${job[0]}</div>
        <div>
          <h3>${job[1]}</h3>
          <p>${job[2]}</p>
          <span class="intern-meta">${job[3]} · Posted this week</span>
        </div>
        <button class="btn" data-route="apply">Apply now</button>
      </article>
    `).join("")}
  </section>
`;

const about = () => `
  <section class="page-hero">
    <div class="eyebrow" style="justify-content:center">Our purpose</div>
    <h1>Opportunity should be within reach.</h1>
    <p>We connect South African skills, businesses and customers.</p>
  </section>

  <section class="section about-grid">
    <div>
      <div class="eyebrow">More than a marketplace</div>
      <h2>A digital ecosystem for a stronger South Africa.</h2>
      <p>
        SkillBridge gives skilled people a place to earn, businesses
        affordable growth opportunities, and students a path to employment.
      </p>
      <p>
        We aim to partner with universities, TVET colleges, government,
        companies and funders, then expand across Africa.
      </p>
    </div>

    <div class="about-art">
      <h3>Better connections.<br>Stronger communities.</h3>
      <p>Local talent deserves a place to shine.</p>
    </div>
  </section>
`;

const contact = () => `
  <section class="page-hero">
    <h1>Let’s start a conversation.</h1>
    <p>Have a question, partnership idea, or need support?</p>
  </section>

  <section class="section contact-grid">
    <div>
      <h2>Get in touch</h2>
      <p>Our team helps customers, businesses and students.</p>
      <p><strong>Email</strong><br>hello@skillbridge.co.za</p>
      <p><strong>Location</strong><br>South Africa</p>
    </div>

    <form class="form-card" data-form="message">
      <div class="form-grid">
        <div class="form-group">
          <label>Name</label>
          <input required placeholder="Your name">
        </div>

        <div class="form-group">
          <label>Email</label>
          <input required type="email" placeholder="you@email.com">
        </div>

        <div class="form-group wide">
          <label>Message</label>
          <textarea required placeholder="How can we help?"></textarea>
        </div>
      </div>

      <button class="btn">Send message</button>
    </form>
  </section>
`;

const profile = () => `
  <section class="page-hero">
    <h1>Your profile</h1>
    <p>Manage how customers and employers see you on SkillBridge.</p>
  </section>

  <section class="section profile-layout">
    <aside class="profile-side">
      <div class="avatar">TN</div>
      <h3>${userProfile.name}</h3>
      <p>Graphic designer · Johannesburg</p>
      <span class="tag">Verified profile</span>
      <p>★ 5.0 · 42 reviews</p>
    </aside>

    <div class="profile-main">
      <h2>Profile details</h2>
      <p>Keep your profile current to make a great impression.</p>

      <div class="profile-actions">
        <button class="btn" data-route="editprofile">Edit profile</button>
        <button class="btn btn-red" data-route="upgrade">Upgrade</button>
      </div>

      <div class="notice" style="margin-top:25px">
        You are currently on the Basic plan — free forever.
      </div>
    </div>
  </section>
`;

const plans = () => `
  <section class="page-hero">
    <div class="eyebrow" style="justify-content:center">Upgrade when you're ready</div>
    <h1>Choose the tools to grow.</h1>
    <p>Start free. Move up only when your goals need more reach.</p>
  </section>

  <section class="section">
    <div class="plan-grid">
      <article class="plan">
        <h3>Basic</h3>
        <div class="price">R0 <small>/ month</small></div>
        <ul>
          <li>Professional profile</li>
          <li>Browse opportunities</li>
          <li>Apply for internships</li>
        </ul>
        <button class="btn btn-outline" data-route="profile">Current plan</button>
      </article>

      <article class="plan featured">
        <span class="tag">Most popular</span>
        <h3 style="margin-top:12px">Premium</h3>
        <div class="price">R99 <small>/ month</small></div>
        <ul>
          <li>Everything in Basic</li>
          <li>Priority listing</li>
          <li>More service leads</li>
          <li>Business insights</li>
        </ul>
        <button class="btn" data-route="payment">Choose Premium</button>
      </article>

      <article class="plan">
        <h3>Premium Pro</h3>
        <div class="price">R249 <small>/ month</small></div>
        <ul>
          <li>Everything in Premium</li>
          <li>Featured homepage placement</li>
          <li>Recruitment tools</li>
          <li>Dedicated support</li>
        </ul>
        <button class="btn" data-route="payment">Choose Pro</button>
      </article>
    </div>
  </section>
`;

const auth = (title = "Sign in") => `
  <section class="page-hero">
    <h1>${title} to SkillBridge</h1>
    <p>Your journey to opportunity starts here.</p>
  </section>

  <section class="section" style="max-width:560px">
    <form class="form-card" data-form="auth">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" required placeholder="you@email.com">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" required placeholder="••••••••">
      </div>

      <button class="btn" style="width:100%">${title}</button>
    </form>
  </section>
`;

const booking = () => `
  <section class="page-hero">
    <h1>Book a service</h1>
    <p>Tell us what you need and we’ll send your request to the provider.</p>
  </section>

  <section class="section" style="max-width:650px">
    <form class="form-card" data-form="booking">
      <div class="form-grid">
        <div class="form-group">
          <label>Service</label>
          <select>
            <option>Graphic design</option>
            <option>Home repairs</option>
            <option>Beauty & wellness</option>
            <option>IT support</option>
          </select>
        </div>

        <div class="form-group">
          <label>Preferred date</label>
          <input type="date" required>
        </div>

        <div class="form-group wide">
          <label>What do you need?</label>
          <textarea required placeholder="Describe your request"></textarea>
        </div>
      </div>

      <div class="notice" style="margin-bottom:15px">
        Your payment will be held safely by an independent third-party escrow
        partner until the service is complete. SkillBridge deducts a 20%
        platform fee from the provider’s completed payout.
      </div>

      <button class="btn">Continue to payment</button>
    </form>
  </section>
`;

const servicePayment = () => `
  <section class="page-hero">
    <div class="eyebrow" style="justify-content:center">Protected payment</div>
    <h1>Pay securely with escrow.</h1>
    <p>Your funds are protected until the work is done.</p>
  </section>

  <section class="section" style="max-width:650px">
    <div class="form-card">
      <div class="notice" style="margin-bottom:22px">
        <strong>How escrow protects you</strong><br>
        Your payment is held by an independent third-party escrow partner.
        It is released only after you confirm satisfactory completion.
      </div>

      <div class="form-grid">
        <div class="form-group wide">
          <label>Booking summary</label>
          <input value="Graphic design service — R500.00" readonly>
        </div>

        <div class="form-group wide">
          <label>Payment method</label>
          <select>
            <option>Debit / credit card</option>
            <option>Instant EFT</option>
          </select>
        </div>

        <div class="form-group">
          <label>Cardholder name</label>
          <input placeholder="Name on card">
        </div>

        <div class="form-group">
          <label>Card number</label>
          <input placeholder="1234 5678 9012 3456">
        </div>
      </div>

      <div class="notice" style="margin:8px 0 18px">
        Escrow will hold R500.00 until you approve payment release.
      </div>

      <button class="btn" data-route="escrow-confirm">
        Pay R500.00 into escrow
      </button>
    </div>
  </section>
`;

const editProfile = () => `
  <section class="page-hero">
    <h1>Edit profile</h1>
    <p>Update your public profile details.</p>
  </section>

  <section class="section" style="max-width:650px">
    <form class="form-card" data-form="profile">
      <div class="form-grid">
        <div class="form-group">
          <label>Full name</label>
          <input id="nameInput" value="${userProfile.name}" required>
        </div>

        <div class="form-group">
          <label>Location</label>
          <input value="Johannesburg" required>
        </div>

        <div class="form-group wide">
          <label>About you</label>
          <textarea>I create thoughtful, vibrant graphic design for local businesses.</textarea>
        </div>
      </div>

      <button class="btn">Save changes</button>
    </form>
  </section>
`;

const escrowConfirm = () => `
  <section class="page-hero">
    <div class="eyebrow" style="justify-content:center">Booking protected</div>
    <h1>Your payment is now in escrow.</h1>
    <p>
      R500.00 is securely held by the independent escrow partner. Approve
      payment release once you are happy with the completed work.
    </p>
    <button class="btn" data-route="home">Return home</button>
  </section>
`;

const pageMap = {
  home,
  services,
  internships,
  about,
  contact,
  profile,
  upgrade: plans,
  signin: () => auth("Sign in"),
  signup: () => auth("Join SkillBridge"),
  book: booking,
  servicepayment: servicePayment,
  editprofile: editProfile,
  apply: () => auth("Create your applicant account"),
  payment: () => `
    <section class="page-hero">
      <h1>Almost there!</h1>
      <p>Your plan is ready. Secure payment setup would be completed here.</p>
      <button class="btn" data-route="profile">Back to profile</button>
    </section>
  `,
  "escrow-confirm": escrowConfirm
};

function showModal(message) {
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-modal">×</button>
      <h2>Thank you!</h2>
      <p>${message}</p>
      <button class="btn" data-route="home">Return home</button>
    </div>
  `;
  modal.classList.add("open");
}

function bindForms() {
  document.querySelectorAll("[data-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (form.dataset.form === "profile") {
        userProfile.name = document.querySelector("#nameInput").value;
        localStorage.setItem("skillbridge-name", userProfile.name);
        go("profile");
        return;
      }

      if (form.dataset.form === "booking") {
        go("servicepayment");
        return;
      }

      showModal("Success! We have received your details.");
    });
  });
}

function renderPage() {
  const page = document.body.dataset.page || "home";
  app.innerHTML = (pageMap[page] || home)();
  window.scrollTo(0, 0);
  bindForms();
}

document.addEventListener("click", event => {
  const routeButton = event.target.closest("[data-route]");

  if (routeButton) {
    go(routeButton.dataset.route);
  }

  if (event.target.matches(".menu-toggle")) {
    document.querySelector("nav")?.classList.toggle("open");
  }

  if (event.target.matches(".filter")) {
    document.querySelectorAll(".filter").forEach(button => {
      button.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  if (event.target.closest(".close-modal") || event.target === modal) {
    modal.classList.remove("open");
  }
});

const chatWindow = document.querySelector("#chatWindow");
const chatFab = document.querySelector("#chatFab");
const closeChat = document.querySelector("#closeChat");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatLog = document.querySelector("#chatLog");

const answers = {
  book: "Go to Services, choose a provider, press Book, add your date and request, then continue to secure escrow payment.",
  intern: "Open Internships, choose an opportunity and press Apply now. You can create an applicant account.",
  plan: "Basic is R0, Premium is R99 per month, and Premium Pro is R249 per month.",
  payment: "Payments are held by an independent escrow partner until you approve the completed work.",
  profile: "Open Profile, then choose Edit profile to update your details or Upgrade to see premium plans."
};

function respond(question) {
  const text = question.toLowerCase();

  const answer =
    Object.entries(answers).find(([keyword]) => text.includes(keyword))?.[1] ||
    "I can help you find a service, book a provider, apply for internships, update your profile, or understand plans.";

  chatLog.insertAdjacentHTML(
    "beforeend",
    `<div class="user-msg">${question}</div>
     <div class="bot-msg">${answer}</div>`
  );

  chatLog.scrollTop = chatLog.scrollHeight;
}

chatFab?.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
});

closeChat?.addEventListener("click", () => {
  chatWindow.classList.remove("open");
});

chatForm?.addEventListener("submit", event => {
  event.preventDefault();

  if (chatInput.value.trim()) {
    respond(chatInput.value);
    chatInput.value = "";
  }
});

document.querySelectorAll(".quick-prompts button").forEach(button => {
  button.addEventListener("click", () => respond(button.textContent));
});

renderPage();
