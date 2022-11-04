package com.entrega5.model.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table (name = "acessos")
public class Acesso {
	
	@Id
	@GeneratedValue
	private Long id;
	private String nome_acesso;
	
	public Acesso(Long id)  {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome_acesso() {
		return nome_acesso;
	}

	public void setNome_acesso(String nome_acesso) {
		this.nome_acesso = nome_acesso;
	}
}
