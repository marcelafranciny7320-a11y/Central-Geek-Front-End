
const API_URL = (
    import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

// Tipos dos mangás

export interface MangaDTO {
    id: string;
    title: string;
    volumeNumber: number;
    isbn: string;
    author: string;
    publisher: string;
    genre: string;
    synopsis: string;
    coverImageUrl: string;
    condition: string;
    ownerId: string;
    notes?: string;
    createdAt: string;
}

export interface CriarMangaDTO {
    title: string;
    volumeNumber: number;
    isbn: string;
    author: string;
    publisher: string;
    genre: string;
    synopsis: string;
    coverImageUrl: string;
    condition: string;
    ownerId: string;
    notes?: string;
}

interface RespostaListaMangas {
    message: string;
    mangas: MangaDTO[];
}

export interface RespostaCadastroManga {
    message: string;
    manga: string;
}

// Tipos de usuários

export interface UsuarioDTO {
    id?: string;
    email: string;
    username: string;
    passwordHash: string;
    role?: string;
    displayName: string;
    bio?: string;
    avatarUrl?: string;
    city?: string;
    state?: string;
    createdAt?: string;
}

export interface LoginDTO {
    email: string;
    passwordHash: string;
}

// Função central para requisições

async function requisicaoAPI<T>(
    endpoint: string,
    metodo: string = "GET",
    dados?: unknown
): Promise<T> {
    const resposta = await fetch(`${API_URL}${endpoint}`, {
    method: metodo,
    headers: {
        ...(dados !== undefined
            ? { "Content-Type": "application/json" }
            : {}),
    },
    ...(dados !== undefined
        ? { body: JSON.stringify(dados) }
        : {}),
    });

    if (!resposta.ok) {
        const mensagem = await resposta.text();

        throw new Error(
            mensagem || `Erro na API: ${resposta.status}`
        );
    }

    if (resposta.status === 204) {
        return undefined as T;
    }

    const texto = await resposta.text();

    if (!texto) {
        return undefined as T;
    }

    return JSON.parse(texto) as T;
}

// MANGÁS

export async function listarMangas(): Promise<MangaDTO[]> {
    const resposta = await requisicaoAPI<RespostaListaMangas>("/mangas");

    return resposta.mangas;
}

export function buscarMangaPorId(id: string) {
    return requisicaoAPI<unknown>(`/mangas/${id}`);
}

export function cadastrarManga(dados: CriarMangaDTO) {
    return requisicaoAPI<RespostaCadastroManga>(
        "/mangas",
        "POST",
        dados
    );
}

export function atualizarManga(
    id: string,
    dados: Partial<CriarMangaDTO>
) {
    return requisicaoAPI<unknown>(`/mangas/${id}`, "PUT", dados);
}

export function excluirManga(id: string) {
    return requisicaoAPI<void>(`/mangas/${id}`, "DELETE");
}

// USUÁRIOS

export function cadastrarUsuario(dados: UsuarioDTO) {
    return requisicaoAPI<unknown>("/usuarios", "POST", dados);
}

export function loginUsuario(dados: LoginDTO) {
    return requisicaoAPI<unknown>("/usuarios/login", "POST", dados);
}

// NEGOCIAÇÕES

export function listarNegociacoes<T = unknown>() {
    return requisicaoAPI<T>("/negociacoes");
}

export function criarNegociacao<T = unknown>(dados: unknown) {
    return requisicaoAPI<T>("/negociacoes", "POST", dados);
}