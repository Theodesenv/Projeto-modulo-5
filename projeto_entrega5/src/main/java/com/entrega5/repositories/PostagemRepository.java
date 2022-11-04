package com.entrega5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entrega5.model.entities.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {
	
	
}
