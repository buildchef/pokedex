export const formatarNomePokemon = (nome?: string) => {
    if (!nome) return nome;
    return nome
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}