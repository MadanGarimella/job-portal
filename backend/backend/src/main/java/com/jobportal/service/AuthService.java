package com.jobportal.service;

import com.jobportal.model.User;
import com.jobportal.repository.UserRespository;
import com.jobportal.config.JwtUtil;
import org.springframework.stereotype.Service;


@Service
public class AuthService {
    private final UserRespository userRespository;
    private final JwtUtil jwtUtil;

    public AuthService(UserRespository userRespository, JwtUtil jwtUtil) {
        this.userRespository = userRespository;
        this.jwtUtil = jwtUtil;
    }

    public String register(User user){
        userRespository.save(user);
        return "User Registered";
    }

    public String login(String email, String password) {
        User user = userRespository.findByEmail(email).orElseThrow();

        if(!user.getPassword().equals(password)) {
            throw new RuntimeException("invalid credientials");
        }

        return jwtUtil.generateToken(user.getEmail(), user.getRole().name());
    }
}
