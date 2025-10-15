/**
 * Comet Mosaico - MVP do Componente Dinâmico de Mosaico
 * Funcionalidades: adicionar, remover e gerenciar blocos dinamicamente
 */

class MosaicoManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.blocks = [];
    this.blockIdCounter = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    console.log('MosaicoManager inicializado');
  }

  setupEventListeners() {
    // Event delegation para botões de remover
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-block-btn')) {
        const blockId = e.target.dataset.blockId;
        this.removeBlock(blockId);
      }
    });
  }

  /**
   * Adiciona novo bloco ao mosaico
   * @param {Object} config - Configuração do bloco (título, conteúdo, estilo)
   * @returns {string} ID do bloco criado
   */
  addBlock(config = {}) {
    const blockId = `block-${this.blockIdCounter++}`;
    
    const block = {
      id: blockId,
      title: config.title || `Bloco ${this.blockIdCounter}`,
      content: config.content || 'Conteúdo do bloco',
      color: config.color || this.getRandomColor(),
      timestamp: new Date().toISOString()
    };

    this.blocks.push(block);
    this.renderBlock(block);
    
    console.log(`Bloco adicionado: ${blockId}`);
    return blockId;
  }

  /**
   * Remove bloco do mosaico
   * @param {string} blockId - ID do bloco a ser removido
   */
  removeBlock(blockId) {
    const index = this.blocks.findIndex(b => b.id === blockId);
    
    if (index !== -1) {
      this.blocks.splice(index, 1);
      const blockElement = document.getElementById(blockId);
      
      if (blockElement) {
        blockElement.classList.add('removing');
        setTimeout(() => {
          blockElement.remove();
          console.log(`Bloco removido: ${blockId}`);
        }, 300);
      }
    }
  }

  /**
   * Renderiza bloco no DOM
   * @param {Object} block - Objeto do bloco
   */
  renderBlock(block) {
    const blockElement = document.createElement('div');
    blockElement.id = block.id;
    blockElement.className = 'mosaic-block';
    blockElement.style.backgroundColor = block.color;
    
    blockElement.innerHTML = `
      <div class="block-header">
        <h3>${block.title}</h3>
        <button class="remove-block-btn" data-block-id="${block.id}" title="Remover bloco">
          ×
        </button>
      </div>
      <div class="block-content">
        <p>${block.content}</p>
      </div>
      <div class="block-footer">
        <small>ID: ${block.id}</small>
      </div>
    `;
    
    this.container.appendChild(blockElement);
    
    // Animação de entrada
    requestAnimationFrame(() => {
      blockElement.classList.add('block-enter');
    });
  }

  /**
   * Retorna todos os blocos
   * @returns {Array} Array de blocos
   */
  getBlocks() {
    return [...this.blocks];
  }

  /**
   * Limpa todos os blocos
   */
  clearAll() {
    const blockIds = this.blocks.map(b => b.id);
    blockIds.forEach(id => this.removeBlock(id));
  }

  /**
   * Gera cor aleatória para bloco
   * @returns {string} Código de cor hexadecimal
   */
  getRandomColor() {
    const colors = [
      '#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD',
      '#F0E68C', '#FFB347', '#B0E0E6', '#FFDAB9'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  /**
   * Retorna estado do mosaico
   * @returns {Object} Estado atual
   */
  getState() {
    return {
      totalBlocks: this.blocks.length,
      blocks: this.getBlocks(),
      lastUpdate: new Date().toISOString()
    };
  }
}

// Exporta para uso global
if (typeof window !== 'undefined') {
  window.MosaicoManager = MosaicoManager;
}
