package com.entrega5.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entrega5.model.entities.Postagem;
import com.entrega5.services.PostagemService;

@RestController
@RequestMapping("/posts")
public class PostagemController {
	
	@Autowired
	PostagemService postagemService;
	
	@GetMapping
	public List<Postagem> list(){
		return postagemService.listAll();
	}

}
