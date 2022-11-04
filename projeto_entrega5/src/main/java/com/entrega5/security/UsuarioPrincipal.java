package com.entrega5.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.entrega5.model.entities.Usuario;

public class UsuarioPrincipal implements UserDetails {

	
	private static final long serialVersionUID = 1L;

	private String email;
	private String password;
	private String nome;
	private Collection<? extends GrantedAuthority> authorities;
	public UsuarioPrincipal(Usuario usuario) {
		this.nome = usuario.getNome();
		this.password = usuario.getSenha();
		
		try {
		    this.authorities =  usuario.getAcessos()
			.stream().map(acesso -> {
				return new SimpleGrantedAuthority("ROLE" +acesso.getNome_acesso());
					}).collect (Collectors.toList());
			}catch (Exception e ) {
				this.authorities =  new ArrayList<>();
		}
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {	
		return authorities;
	}
	@Override
	public String getPassword() {		
		return password;
	}
	@Override
	public String getUsername() {
		return nome;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {		
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {		
		return true;
	}
	@Override
	public boolean isEnabled() {		
		return true;
	}
	
	
}
