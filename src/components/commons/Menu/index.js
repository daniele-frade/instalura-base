import { Logo } from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";

const Menu = () => {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>{link.texto}</a>
            </li>
          );
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Cadastrar</button>
        <button>Entrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu