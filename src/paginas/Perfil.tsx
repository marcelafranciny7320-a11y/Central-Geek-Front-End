import { useState, type ChangeEvent, type FormEvent } from 'react'

interface UserProfile {
    nome: string;
    email: string;
    avatarUrl: string;
    bio: string;
    cidade: string;
    estado: string,
    whatsapp: string;
}

    export function Perfil () {
    const [profile, setProfile]= useState<UserProfile>({
      nome: 'User',
      email: 'user123@exemplo.com',
      avatarUrl: 'https://github.com/identicons/user.png',
      bio: 'Colecionador de Shonen e leitor assíduo. Em busca de trocas de mangás clássicos!',
      cidade: 'São Paulo',
      estado: 'Sp',
      whatsapp: '(11)99999-9999',
    });

    const [mensagemSucesso, setMensagemSucesso] = useState(false);
    const handleChange = (
       e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
        const { name,value}= e.target;
        setProfile((prev) =>({...prev,
            [name]: value
        }));
    } ;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log('Dados atualizados:', profile);

        setMensagemSucesso(true);
        setTimeout(() => setMensagemSucesso(false), 3000);
    };

    return (
        <main className='perfil-container'>
          <h1>Meu Perfil</h1>

          {mensagemSucesso && (
            <div className='alert-sucesso'> Perfil atualizados com sucesso!</div>
          )}
          <form onSubmit={handleSubmit} className='perfil-form'>
            
            <div className='avatar-section'>
              <img
              src={profile.avatarUrl || 'https://via.placeholder.com/120'}
              alt={`Foto de ${profile.nome}`}
              className="perfil-avatar-preview"
              />

              <div className='form-group'> 
                <label htmlFor='avatarUrl'>URL da iamgem de perfil</label>
                <input
                  type="text"
                  id="avatarUrl"
                  name='avatarUrl'
                  value={profile.avatarUrl}
                  onChange={handleChange}
                  placeholder="https://link-da-imagem.com/foto.jpg"

                />
              </div>
            </div>
          
            <div className='form-group'>
              <label htmlFor='nome'>Nome Completo/ Usuário </label>
              <input
                 type='text'
                 id='nome'
                 name='nome'
                 value={profile.nome}
                 onChange={handleChange}
                 required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>E-mail</label>
              <input
                 type='email'
                 id='email'
                 name='email'
                 value={profile.email}
                 onChange={handleChange}
                 disabled
              />
            </div>
            <div className="form-row"></div>
            <div className='form-group'>
              <label htmlFor='cidade'>Cidade </label>
              <input
                 type='text'
                 id='cidade'
                 name='cidade'
                 value={profile.cidade}
                 onChange={handleChange}
                 />
            </div>
            <div className='form-group form-group-short'>
              <label htmlFor='estado'>Estado</label>
              <input
                 type='text'
                 id='estado'
                 name='estado'
                 value={profile.estado}
                 onChange={handleChange}
                 maxLength={2}
                />
          </div>
          <div className='form-group'>
              <label htmlFor='whatsapp'>whatsapp</label>
              <input
                 type='text'
                 id='whatsapp'
                 name='whatsapp'
                 value={profile.whatsapp}
                 onChange={handleChange}
                 placeholder="(00) 00000-0000"
               />
          </div>
           <div className='form-group'>
              <label htmlFor='bio'>biografia/ Sobre você</label>
              <textarea
                 id='bio'
                 name='bio'
                 value={profile.bio}
                 onChange={handleChange}
                 placeholder="Conte um pouco sobre suas coleções e mangás favoritos..."
               />
          </div>
          <button type='submit' className='btn-salvar'>
            Salvar Alterações
          </button>
          </form>
        
        </main>
    );

}