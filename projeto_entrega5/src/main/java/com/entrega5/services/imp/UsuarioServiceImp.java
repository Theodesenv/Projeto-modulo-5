package com.entrega5.services.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.entrega5.model.entities.Usuario;
import com.entrega5.repositories.UsuarioRepository;
import com.entrega5.services.UsuarioService;

@Service

public class UsuarioServiceImp implements UsuarioService {
	
	@Autowired
	UsuarioRepository userRepository;
	
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	public Usuario save(Usuario usuario) {
		
		Usuario existsUsuario = userRepository.findByEmail(usuario.getEmail());
		
		if (existsUsuario != null) {
			throw new Error("Usuario existente.");
		}
		
		usuario.setSenha(passwordEncoder().encode(usuario.getSenha()));
		
		Usuario usuarioCriado = userRepository.save(usuario);
		
		return usuarioCriado;
	}

}
