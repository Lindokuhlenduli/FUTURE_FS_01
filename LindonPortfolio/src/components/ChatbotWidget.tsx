import { useState, useRef, useEffect } from "react";
import { MessageCircleHeart, X, Send, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const portfolioContext = {
  name: "Lindokuhle Nduli",
  role: "Full Stack Developer & Software Development Graduate",
  email: "lindokuhlenduli81@gmail.com",
  github: "https://github.com/Lindokuhlenduli",
  linkedin: "https://linkedin.com/in/lindokuhle-nduli-261625291",
  education: "Diploma in Software Development from Rosebank College (2023-2025), graduating June 2026, 360 credits.",
  skills: "C#, Java, Python, JavaScript, SQL, Kotlin, ASP.NET, REST APIs, Node.js, React, Firebase, Azure DevOps, CI/CD, Git & GitHub",
  certifications: "FNB App Academy Full Stack Development Certificate (2025), WeThinkCode Generative AI Certificate (2025)",
  projects: [
    "ZenithCloud – ASP.NET cloud platform for NPOs with CRUD, REST APIs, and Azure DevOps CI/CD",
    "TuneTracker – Kotlin Android music app with Firebase auth, Spotify API integration",
    "VoteSecure – Java desktop e-voting system with role-based access and SQL Server",
  ],
  sections: {
    home: "Introduction and hero section",
    about: "About me, background, and code snippet",
    education: "Education at Rosebank College",
    experience: "Certificates from FNB and WeThinkCode",
    skills: "Programming languages, frameworks, and tools",
    projects: "Portfolio projects with details",
    contact: "Contact form and social links",
  },
};

function generateResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("navigate") || q.includes("section") || q.includes("where") || q.includes("find") || q.includes("how do i")) {
    if (q.includes("project")) return "📂 You can find Lindokuhle's projects in the **Projects** section! Just scroll down or [click here](#projects) to jump there.";
    if (q.includes("contact") || q.includes("reach") || q.includes("email")) return "📧 Head to the **Contact** section at the bottom! You can also email directly at lindokuhlenduli81@gmail.com. [Jump to Contact](#contact)";
    if (q.includes("skill")) return "🛠️ Check out the **Skills** section to see all programming languages and tools! [Jump to Skills](#skills)";
    if (q.includes("education") || q.includes("study") || q.includes("school")) return "🎓 The **Education** section has all the details! [Jump to Education](#education)";
    if (q.includes("experience") || q.includes("certificate") || q.includes("cert")) return "💼 Visit the **Experience** section for certificates and professional experience! [Jump to Experience](#experience)";
    if (q.includes("about")) return "👤 The **About** section has Lindokuhle's background and story! [Jump to About](#about)";
    return "🗺️ This portfolio has these sections:\n- **Home** - Introduction\n- **About** - Background\n- **Education** - Academic history\n- **Experience** - Certificates\n- **Skills** - Technical abilities\n- **Projects** - Built projects\n- **Contact** - Get in touch\n\nJust scroll or click any nav item!";
  }
  if (q.includes("who") || q.includes("about") || q.includes("tell me")) return `👋 **Lindokuhle Nduli** is a Software Development graduate and aspiring Full Stack Developer from South Africa. They specialize in backend development, databases, and cloud technologies. Currently completing a Diploma at Rosebank College!`;
  if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("stack")) return `🛠️ Lindokuhle's tech stack includes:\n- **Languages:** C#, Java, Python, JavaScript, SQL, Kotlin\n- **Frameworks:** ASP.NET, React, Node.js\n- **Tools:** Azure DevOps, Firebase, Git & GitHub, CI/CD\n\n[See all skills](#skills)`;
  if (q.includes("project") || q.includes("built") || q.includes("portfolio") || q.includes("work")) return `📂 Here are the main projects:\n\n🌐 **ZenithCloud** – ASP.NET cloud platform for NPOs\n🎵 **TuneTracker** – Kotlin music app with Spotify API\n🗳️ **VoteSecure** – Java e-voting system\n\n[View all projects](#projects)`;
  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) return `📬 You can reach Lindokuhle via:\n- **Email:** lindokuhlenduli81@gmail.com\n- **GitHub:** [Lindokuhlenduli](https://github.com/Lindokuhlenduli)\n- **LinkedIn:** [Profile](https://linkedin.com/in/lindokuhle-nduli-261625291)\n\n[Go to Contact](#contact)`;
  if (q.includes("education") || q.includes("study") || q.includes("degree") || q.includes("college")) return `🎓 Lindokuhle studied **Diploma in Software Development** at **Rosebank College** (2023-2025). Completed 360 credits and graduating in June 2026!`;
  if (q.includes("certificate") || q.includes("cert") || q.includes("experience")) return `💼 Lindokuhle has earned:\n- **FNB App Academy** – Full Stack Development (2025)\n- **WeThinkCode** – Generative AI Certificate (2025)\n\n[View certificates](#experience)`;
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("howzit")) return `✨ Hey there! Welcome to Lindokuhle's portfolio! I can help you:\n- 🗺️ **Navigate** around the site\n- 👤 Learn **about** Lindokuhle\n- 🛠️ See **skills** & **projects**\n- 📬 Find **contact** info\n\nWhat would you like to know?`;
  return `💡 I can help you explore this portfolio! Try asking:\n- "What projects has Lindokuhle built?"\n- "What are their skills?"\n- "How do I contact them?"\n- "Where can I find the projects section?"\n- "Tell me about their education"`;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "✨ Hi! I'm Lindokuhle's portfolio assistant. I can help you navigate this site and find information. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const response = generateResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 500);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
      e.preventDefault();
      const id = target.getAttribute("href")!.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const renderMessage = (content: string) => {
    return content.split("\n").map((line, i) => {
      let processed = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[([^\]]+)\]\((#[^)]+)\)/g, '<a href="$2" class="text-primary underline hover:opacity-80">$1</a>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">$1</a>');
      if (line.startsWith("- ")) processed = `<span class="block ml-2">${processed.slice(2)}</span>`;
      return <div key={i} dangerouslySetInnerHTML={{ __html: processed }} className="leading-relaxed" />;
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, hsl(175, 50%, 42%), hsl(290, 35%, 60%))",
          boxShadow: "0 4px 24px -4px hsl(175 50% 42% / 0.5)",
        }}
        aria-label="Chat assistant"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircleHeart size={24} className="text-white" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[340px] max-h-[480px] rounded-2xl overflow-hidden flex flex-col border border-border shadow-2xl" style={{ background: "hsl(var(--background))" }}>
          <div className="px-4 py-3 flex items-center gap-3 border-b border-border" style={{ background: "linear-gradient(135deg, hsl(175, 50%, 42%), hsl(290, 35%, 60%))" }}>
            <Sparkles size={20} className="text-white" />
            <div>
              <p className="text-white font-heading font-semibold text-sm">Portfolio Assistant</p>
              <p className="text-white/70 text-xs">Ask me anything!</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[340px]" onClick={handleLinkClick}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                  {renderMessage(msg.content)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t border-border flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." className="flex-1 bg-muted border border-border rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
            <button type="submit" className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary text-primary-foreground hover:opacity-90 transition-opacity shrink-0">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
