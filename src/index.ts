import { randomInt } from "crypto";


/**
 * Função principal para gerar senhas seguras
 */
function generateSecurePassword(): string {
  const passwordArray = [
    ...generateCharacters(65, 90, 2), // Letras maiúsculas (A-Z)
    ...generateCharacters(97, 122, 2), // Letras minúsculas (a-z)
    ...generateCharacters(48, 57, 2), // Números (0-9)
    String.fromCharCode(randomInt(35, 65)), // 1 caractere especial
    ...generateCharacters(97, 122, 3), // Mais 3 letras aleatórias
  ];

  // Embaralha os caracteres
  shuffleArray(passwordArray);

  // Converte para string
  return passwordArray.join("");
}

/**
 * Gera caracteres aleatórios com base no código ASCII
 */
function generateCharacters(min: number, max: number, count: number): string[] {
  const characters: string[] = [];
  for (let i = 0; i < count; i++) {
    const char = String.fromCharCode(randomInt(min, max + 1));
    characters.push(char);
  }
  return characters;
}

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 */
function shuffleArray(array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Função para gerar e exibir senhas
 */
function generatePasswords() {
  console.log("Gerando senhas seguras...");
  const passwords: string[] = [];
  for (let i = 0; i < 5; i++) {
    passwords.push(generateSecurePassword());
  }

  console.log("Senhas geradas com sucesso:");
  passwords.forEach((password, index) => {
    console.log(`Senha ${index + 1}: ${password}`);
  });
}

/**
 * Função main para iniciar o programa
 */
async function main() {
  generatePasswords();

}

// Executa o programa
(async () => {
  await main();
})();
