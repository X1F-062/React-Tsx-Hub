import { Topic, CodeExample, QuizQuestion } from "../types";

export const topics: Topic[] = [
  {
    id: "components",
    title: "Bileşenler",
    icon: "🧩",
    description: "React'ın temel yapı taşı: fonksiyonel bileşenler ve JSX",
    level: "Başlangıç",
    color: "#6366f1",
  },
  {
    id: "props",
    title: "Props & Types",
    icon: "📦",
    description: "Bileşenler arası veri akışı ve TypeScript tip tanımları",
    level: "Başlangıç",
    color: "#0ea5e9",
  },
  {
    id: "state",
    title: "useState",
    icon: "⚡",
    description: "Bileşen durumu yönetimi ve reaktif güncellemeler",
    level: "Başlangıç",
    color: "#f59e0b",
  },
  {
    id: "effects",
    title: "useEffect",
    icon: "🔄",
    description: "Yan etkiler, API çağrıları ve yaşam döngüsü",
    level: "Orta",
    color: "#10b981",
  },
  {
    id: "context",
    title: "Context API",
    icon: "🌐",
    description: "Global durum yönetimi ve prop drilling çözümü",
    level: "Orta",
    color: "#8b5cf6",
  },
  {
    id: "hooks",
    title: "Custom Hooks",
    icon: "🪝",
    description: "Yeniden kullanılabilir mantık için özel hook yazımı",
    level: "İleri",
    color: "#ec4899",
  },
];

export const codeExamples: Record<string, CodeExample[]> = {
  components: [
    {
      id: "comp-1",
      title: "İlk Bileşeniniz",
      description: "En basit React fonksiyonel bileşeni",
      code: `// Selamlama.tsx
interface SelamlamaProps {
  isim: string;
  yas?: number;
}

const Selamlama = ({ isim, yas }: SelamlamaProps) => {
  return (
    <div className="kart">
      <h2>Merhaba, {isim}!</h2>
      {yas && <p>Yaşınız: {yas}</p>}
    </div>
  );
};

export default Selamlama;`,
      output: "Merhaba, Ayşe! Yaşınız: 25",
    },
    {
      id: "comp-2",
      title: "Bileşen Listesi",
      description: "Array.map() ile dinamik liste render etme",
      code: `interface Urun {
  id: number;
  ad: string;
  fiyat: number;
}

const UrunListesi = ({ urunler }: { urunler: Urun[] }) => {
  return (
    <ul>
      {urunler.map((urun) => (
        <li key={urun.id}>
          {urun.ad} — {urun.fiyat}₺
        </li>
      ))}
    </ul>
  );
};`,
    },
  ],
  props: [
    {
      id: "props-1",
      title: "Interface ile Props",
      description: "TypeScript interface kullanarak güvenli prop tanımları",
      code: `interface KartProps {
  baslik: string;
  icerik: string;
  renk?: "mavi" | "yesil" | "kirmizi";
  tiklanabilir?: boolean;
  onTikla?: () => void;
}

const Kart = ({
  baslik,
  icerik,
  renk = "mavi",
  tiklanabilir = false,
  onTikla,
}: KartProps) => {
  return (
    <div
      className={\`kart kart-\${renk}\`}
      onClick={tiklanabilir ? onTikla : undefined}
      style={{ cursor: tiklanabilir ? "pointer" : "default" }}
    >
      <h3>{baslik}</h3>
      <p>{icerik}</p>
    </div>
  );
};`,
    },
    {
      id: "props-2",
      title: "Children Props",
      description: "React.ReactNode ile alt bileşen aktarımı",
      code: `import { ReactNode } from "react";

interface SarmalayiciProps {
  baslik: string;
  children: ReactNode;
  gosterAciklama?: boolean;
}

const Sarmalayici = ({
  baslik,
  children,
  gosterAciklama = true,
}: SarmalayiciProps) => {
  return (
    <section className="sarmalayici">
      {gosterAciklama && <h2>{baslik}</h2>}
      <div className="icerik">{children}</div>
    </section>
  );
};`,
    },
  ],
  state: [
    {
      id: "state-1",
      title: "Sayaç Örneği",
      description: "useState hook ile basit durum yönetimi",
      code: `import { useState } from "react";

const Sayac = () => {
  const [sayi, setSayi] = useState<number>(0);

  const artir = () => setSayi((prev) => prev + 1);
  const azalt = () => setSayi((prev) => prev - 1);
  const sifirla = () => setSayi(0);

  return (
    <div>
      <h2>Sayaç: {sayi}</h2>
      <button onClick={artir}>+</button>
      <button onClick={azalt}>-</button>
      <button onClick={sifirla}>Sıfırla</button>
    </div>
  );
};`,
      output: "Sayaç: 0  [+] [-] [Sıfırla]",
    },
    {
      id: "state-2",
      title: "Form Durumu",
      description: "Kontrollü bileşenlerle form yönetimi",
      code: `interface FormVeri {
  ad: string;
  email: string;
}

const KayitFormu = () => {
  const [form, setForm] = useState<FormVeri>({
    ad: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Gönderildi:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="ad" value={form.ad} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
};`,
    },
  ],
  effects: [
    {
      id: "effect-1",
      title: "Veri Çekme",
      description: "useEffect ile API'den veri alma",
      code: `import { useState, useEffect } from "react";

interface Kullanici {
  id: number;
  name: string;
  email: string;
}

const KullaniciBilgisi = ({ id }: { id: number }) => {
  const [kullanici, setKullanici] = useState<Kullanici | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    const veriCek = async () => {
      try {
        setYukleniyor(true);
        const res = await fetch(
          \`https://jsonplaceholder.typicode.com/users/\${id}\`
        );
        const veri: Kullanici = await res.json();
        setKullanici(veri);
      } catch {
        setHata("Veri yüklenemedi!");
      } finally {
        setYukleniyor(false);
      }
    };

    veriCek();
  }, [id]); // id değişince tekrar çalışır

  if (yukleniyor) return <p>Yükleniyor...</p>;
  if (hata) return <p>Hata: {hata}</p>;
  if (!kullanici) return null;

  return (
    <div>
      <h2>{kullanici.name}</h2>
      <p>{kullanici.email}</p>
    </div>
  );
};`,
    },
  ],
  context: [
    {
      id: "ctx-1",
      title: "Context Oluşturma",
      description: "createContext ve useContext ile global durum",
      code: `import { createContext, useContext, useState, ReactNode } from "react";

// Tip tanımı
interface TemaContext {
  tema: "light" | "dark";
  temaToggle: () => void;
}

// Context oluştur
const TemaCtx = createContext<TemaContext | undefined>(undefined);

// Provider bileşeni
export const TemaProvider = ({ children }: { children: ReactNode }) => {
  const [tema, setTema] = useState<"light" | "dark">("light");

  const temaToggle = () =>
    setTema((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <TemaCtx.Provider value={{ tema, temaToggle }}>
      {children}
    </TemaCtx.Provider>
  );
};

// Özel hook (güvenli kullanım)
export const useTema = () => {
  const ctx = useContext(TemaCtx);
  if (!ctx) throw new Error("useTema: Provider dışında kullanılamaz!");
  return ctx;
};`,
    },
  ],
  hooks: [
    {
      id: "hook-1",
      title: "useLocalStorage Hook",
      description: "Yerel depolama için yeniden kullanılabilir hook",
      code: `import { useState, useEffect } from "react";

function useLocalStorage<T>(anahtar: string, baslangicDeger: T) {
  const [deger, setDeger] = useState<T>(() => {
    try {
      const kayitli = localStorage.getItem(anahtar);
      return kayitli ? (JSON.parse(kayitli) as T) : baslangicDeger;
    } catch {
      return baslangicDeger;
    }
  });

  useEffect(() => {
    localStorage.setItem(anahtar, JSON.stringify(deger));
  }, [anahtar, deger]);

  return [deger, setDeger] as const;
}

// Kullanım
const App = () => {
  const [isim, setIsim] = useLocalStorage<string>("isim", "");

  return (
    <input
      value={isim}
      onChange={(e) => setIsim(e.target.value)}
      placeholder="Adınız (kaydedilir)"
    />
  );
};`,
    },
  ],
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "React'ta bileşenler arası veri aktarımı nasıl yapılır?",
    options: ["useState", "Props", "useEffect", "Context"],
    correctIndex: 1,
    explanation:
      "Props, parent (üst) bileşenden child (alt) bileşene veri aktarmanın temel yoludur.",
  },
  {
    id: 2,
    question: "useState hook'u ne zaman kullanılır?",
    options: [
      "API çağrısı yapmak için",
      "Stil tanımlamak için",
      "Bileşen içi değişken durumlar için",
      "Bileşen dışa aktarmak için",
    ],
    correctIndex: 2,
    explanation:
      "useState, bileşen içinde zaman içinde değişebilecek verileri (durum/state) yönetmek için kullanılır.",
  },
  {
    id: 3,
    question: "TypeScript'te props tipi tanımlamak için ne kullanılır?",
    options: ["class", "interface veya type", "enum", "namespace"],
    correctIndex: 1,
    explanation:
      "Interface veya type keyword'ü ile props tipleri tanımlanır. Her ikisi de geçerlidir.",
  },
  {
    id: 4,
    question: "useEffect'in bağımlılık dizisi boş ([]) bırakılırsa ne olur?",
    options: [
      "Her render'da çalışır",
      "Hiç çalışmaz",
      "Sadece bileşen mount olduğunda bir kez çalışır",
      "Her saniye çalışır",
    ],
    correctIndex: 2,
    explanation:
      "Boş bağımlılık dizisi, useEffect'in yalnızca bileşen ilk monte edildiğinde (componentDidMount gibi) çalışmasını sağlar.",
  },
  {
    id: 5,
    question: "React'ta liste render ederken neden 'key' prop zorunludur?",
    options: [
      "Stil uygulamak için",
      "React'ın hangi elemanın değiştiğini anlaması için",
      "Sıralama için",
      "Zorunlu değildir",
    ],
    correctIndex: 1,
    explanation:
      "Key prop, React'ın sanal DOM farkını hesaplarken hangi liste elemanlarının eklenip çıkarıldığını verimli biçimde takip etmesini sağlar.",
  },
];
