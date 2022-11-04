package com.entrega5.services;

import com.entrega5.model.dto.UsuarioAcessoDTO;
import com.entrega5.model.entities.Usuario;

public interface AcessoService {
	
	Usuario executar (UsuarioAcessoDTO usuarioDTO);
}
