package com.entrega5.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.entrega5.model.entities.Usuario;

public interface UsuarioService {
	BCryptPasswordEncoder passwordEncoder();
	Usuario save (Usuario usuario);
}
