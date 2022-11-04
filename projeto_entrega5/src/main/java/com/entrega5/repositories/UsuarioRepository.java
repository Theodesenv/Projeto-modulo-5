package com.entrega5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.entrega5.model.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
	Usuario findByEmail(String email);
	Usuario findByUsername (String username);
	
	@Query("SELECT u FROM Usuarios u JOIN FECTH u.acessos WHERE u.username = :username")
	Usuario findByUsernameFecthAcessos(@Param("email") String username);
}
