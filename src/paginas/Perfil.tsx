import { useContext, useState, type ChangeEvent, type FormEvent } from 'react'
import { UsuarioLogadoContext } from '../contexts/contextAuth';

interface UserProfile {
    displayName: string;
    email: string;
    username: string;
    password: string;
    bio: string;
    avatarUrl: string;
    city: string;
    state: string;
    whatsapp: string;
}


    export function Perfil () {

      const login = useContext(UsuarioLogadoContext);

    const [profile, setProfile]= useState<UserProfile>({
      displayName: login?.displayName || 'User',
      email: login?.email || 'user123@exemplo.com',
      username: login?.username || 'user123',
      password: '',
      bio: login?.bio || 'Colecionador de Shonen e leitor assíduo. Em busca de trocas de mangás clássicos!',
      avatarUrl: login?.avatarUrl || 'https://github.com/identicons/user.png',
      city: login?.city || 'São Paulo',
      state: login?.state || 'Sp',
      whatsapp: login?.whatsapp || '(11) 99999-9999',
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
              alt={`Foto de ${profile.displayName}`}
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
              <label htmlFor='displayName'>Nome Completo/ Usuário </label>
              <input
                 type='text'
                 id='displayName'
                 name='displayName'
                 value={profile.displayName}
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
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Senha</label>
              <input
                 type='password'
                 id='password'
                 name='password'
                 value={profile.password}
                 onChange={handleChange}
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
            {/* <div className="form-row"></div> */}
            <div className='form-group'>
              <label htmlFor='city'>Cidade </label>
              <input
                 type='text'
                 id='city'
                 name='city'
                 value={profile.city}
                 onChange={handleChange}
                 />
            </div>
            <div className='form-group form-group'>
              <label htmlFor='state'>Estado</label>
              <input
                 type='text'
                 id='state'
                 name='state'
                 value={profile.state}
                 onChange={handleChange}
                 maxLength={2}
                />
          </div>
          <div className='form-group'>
              <label htmlFor='whatsapp'>WhatsApp</label>
              <input
                 type='text'
                 id='whatsapp'
                 name='whatsapp'
                 value={profile.whatsapp}
                 onChange={handleChange}
                 placeholder="(00) 00000-0000"
               />
          </div>
          <button type='submit' className='btn-salvar'>
            Salvar Alterações
          </button>
          </form>
        
        </main>
    );

}