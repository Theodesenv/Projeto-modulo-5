package com.entrega5.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.entrega5.model.entities.Usuario;
import com.entrega5.repositories.UsuarioRepository;

@Service
public class UsuarioDetailsService implements UserDetailsService{
	@Autowired
	UsuarioRepository repo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = repo.findByUsernameFecthAcessos(username);
		if(usuario == null) {
			usuario = repo.findByUsername(username);
		}
		if(usuario==null) {
			throw new Error("Usuário não existe.");
		}
		return new UsuarioPrincipal(usuario);
	}

}
