import { createContext, useState, type ReactNode } from "react";
import type { UsuarioDTO } from "../api";

/*
    id: 'user-001',
    email: 'rafael.silva@example.com',
    username: 'rafaelcolecionador',
    passwordHash: '$argon2id$v=19$MOCK_HASH_USER_001',
    role: 'USER',
    displayName: 'Rafael Silva',
    bio: 'Colecionador de mangás e fã de shonen. Procuro completar minhas coleções.',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    city: 'São Paulo',
    state: 'SP',
    createdAt: '2026-09-01T14:30:00.000Z',
*/

type ContextType = {
    id: string;
    setId: (id: string) => void;
    email: string;
    setEmail: (email: string) => void;
    username: string;
    setUsername: (username: string) => void;
    role: string;
    setRole: (role: string) => void;
    displayName: string;
    setDisplayName: (displayName: string) => void;
    bio: string;
    setBio: (bio: string) => void;
    avatarUrl: string;
    setAvatarUrl: (avatarUrl: string) => void;
    city: string;
    setCity: (city: string) => void;
    state: string;
    setState: (state: string) => void;
    setUsuarioLogado: (usuario: UsuarioDTO) => void;
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [bio, setBio] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const setUsuarioLogado = (usuario: UsuarioDTO) => {
        console.log(usuario);
        setId(usuario.id ?? "");
        setEmail(usuario.email);
        setUsername(usuario.username);
        setRole(usuario.role ?? "");
        setDisplayName(usuario.displayName);
        setBio(usuario.bio ?? "");
        setAvatarUrl(usuario.avatarUrl ?? "");
        setCity(usuario.city ?? "");
        setState(usuario.state ?? "");
    };

    return(
        <UsuarioLogadoContext.Provider value={{ id, setId, email, setEmail, username, setUsername, role, setRole, displayName, setDisplayName, bio, setBio, avatarUrl, setAvatarUrl, city, setCity, state, setState, setUsuarioLogado }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}