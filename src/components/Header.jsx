import headerLogo from "../../public/images/header-logo.png";

export default function Header() {
  return (
    <header>
      <img src={headerLogo} alt="Logo consists of globe image " />
      <h3>my travel journal.</h3>
    </header>
  );
}
