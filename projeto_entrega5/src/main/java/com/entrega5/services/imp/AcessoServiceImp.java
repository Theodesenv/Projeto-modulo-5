package com.entrega5.services.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entrega5.model.dto.UsuarioAcessoDTO;
import com.entrega5.model.entities.Acesso;
import com.entrega5.model.entities.Usuario;
import com.entrega5.repositories.UsuarioRepository;
import com.entrega5.services.AcessoService;

@Service
public class AcessoServiceImp implements AcessoService{
	
	@Autowired
	UsuarioRepository userRepository;
	
	@Override
	public Usuario executar(UsuarioAcessoDTO usuarioAcessoDTO) {
		
		Optional<Usuario> usuarioExists = userRepository.findById(usuarioAcessoDTO.idUser);
		List<Acesso> acessos = new ArrayList<>();
		
		if (usuarioExists.isEmpty()) {
			throw new Error ("Usuário não Encontrado.");
		}
		
		acessos = usuarioAcessoDTO.getIdsAcesso().stream().map(acesso ->{return new Acesso(acesso);
		}).collect(Collectors.toList());
			
		
		Usuario usuario = usuarioExists.get();
		
		usuario.setAcessos(acessos);
		
		userRepository.save(usuario);
	
		return usuario;
	}

}
