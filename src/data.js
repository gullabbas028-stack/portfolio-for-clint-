export const profile = {
  name: "Muhammad Ashfaq",
  role: "Cyber Security Student",
  tagline: "Securing networks, one packet at a time.",
  location: "Ali Town, Lahore, Pakistan",
  email: "ashfaqpro9852@gmail.com",
  phone: "+92 327 9148525",
  whatsapp: "923279148525",
  summary:
    "Motivated BS Cyber Security student at Khwaja Fareed University of Engineering & Information Technology (KFUEIT), with a strong interest in cyber security, network security, and information technology. Completed Certified Ethical Hacker (CEH) training from Corvit Systems Lahore, gaining practical exposure to ethical hacking, networking, and Linux-based security labs. Building a solid foundation in computer operations, networking concepts, and system administration, with a growing focus on strengthening network security and cybersecurity skills.",
  status: "Available for internships & entry-level SOC / Network Security roles",
};

export const education = [
  {
    institute: "KFUEIT University",
    detail: "Khwaja Fareed University of Engineering & Information Technology",
    program: "BS Cyber Security",
    period: "2024 — 2028",
    note: "Coursework spans network security, systems administration, and information security fundamentals.",
  },
];

export const certifications = [
  {
    title: "Certified Ethical Hacker (CEH) — Training",
    org: "Corvit Systems, Lahore",
    period: "15 June — 05 August",
    detail:
      "Hands-on training in ethical hacking methodology, reconnaissance, vulnerability scanning, and reporting.",
  },
  {
    title: "Ethical Hacking & Cybersecurity Training",
    org: "Corvit Systems, Lahore",
    period: "2026 — Present",
    detail:
      "Ongoing practical exposure to Linux-based security labs and applied network defense techniques.",
  },
];

export const skillGroups = [
  {
    label: "Networking",
    items: ["Computer Networking", "LAN / WAN", "TCP/IP", "DNS / DHCP", "Routers & Switches", "IP Addressing"],
  },
  {
    label: "Security & Systems",
    items: ["Linux", "Shodan", "Ethical Hacking Basics", "System Administration", "Computer Proficiency"],
  },
  {
    label: "Languages",
    items: ["English (Native)", "Urdu"],
  },
];

// Order mirrors the phases taught in CEH training — used for the process timeline.
export const methodology = [
  { phase: "Recon", detail: "Footprinting & information gathering with OSINT tools like Shodan." },
  { phase: "Scan", detail: "Network & port scanning to map live hosts and open services." },
  { phase: "Enumerate", detail: "Identifying services, shares, and potential weak points." },
  { phase: "Report", detail: "Documenting findings clearly for remediation." },
];

export const socials = {
  email: "mailto:ashfaqpro9852@gmail.com",
  whatsapp: "https://wa.me/923279148525",
};

// EmailJS config — replace with your own IDs from https://www.emailjs.com
export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
