package com.entrega5.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entrega5.model.dto.UsuarioAcessoDTO;
import com.entrega5.model.entities.Usuario;
import com.entrega5.services.AcessoService;
import com.entrega5.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioService usuarioService;
	
	@Autowired
	AcessoService acessoService;
	
	@PostMapping("/create")
	public Usuario save(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}
	@PostMapping("/acesso")
	public Usuario acesso(@RequestBody UsuarioAcessoDTO usuarioAcessoDTO) {
		return acessoService.executar(usuarioAcessoDTO);
	}
}
