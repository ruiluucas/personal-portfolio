import { Component } from "react";

/**
 * Segura a cena 3D: se o WebGL nao estiver disponivel, se o modelo falhar ou se
 * qualquer coisa estourar dentro do <Canvas>, o site continua de pe (o conteudo
 * aparece) em vez de virar uma pagina preta.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { crashed: false };
  }

  static getDerivedStateFromError() {
    return { crashed: true };
  }

  componentDidCatch(error) {
    console.error("Falha na cena 3D:", error);
  }

  render() {
    if (this.state.crashed) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}
