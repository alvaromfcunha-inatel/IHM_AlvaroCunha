import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.css']
})
export class ProdutoTabelaComponent {
  constructor(
    private service: ProdutoService
  ) {}
}
