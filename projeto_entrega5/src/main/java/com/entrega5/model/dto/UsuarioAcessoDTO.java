package com.entrega5.model.dto;

import java.util.List;


public class UsuarioAcessoDTO {
	
	public Long idUser;
	
	public List<Long> idsAcesso;

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	public List<Long> getIdsAcesso() {
		return idsAcesso;
	}

	public void setIdsAcesso(List<Long> idsAcesso) {
		this.idsAcesso = idsAcesso;
	}
	
	
}
