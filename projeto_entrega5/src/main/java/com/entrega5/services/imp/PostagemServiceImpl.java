package com.entrega5.services.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entrega5.model.entities.Postagem;
import com.entrega5.repositories.PostagemRepository;
import com.entrega5.services.PostagemService;

@Service
public class PostagemServiceImpl implements PostagemService {
	
	@Autowired
	PostagemRepository postRepository;
	@Override
	public List<Postagem> listAll() {		
		return postRepository.findAll();
	}

}
