package com.example.demo.config;

import java.util.Arrays;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDecisionVoter;
import org.springframework.security.access.vote.UnanimousBased;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;

import com.example.demo.openpolicyagent.voter.OPAVoter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private String issuerUri = "http://localhost:9080/auth/realms/sample";
    private String jwkSetUri = "http://localhost:9080/auth/realms/sample/protocol/openid-connect/certs";

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .authorizeRequests()
        .anyRequest()
        .authenticated()
        .accessDecisionManager(accessDecisionManager());
//            .and()
//            .oauth2ResourceServer(oauth2ResourceServer ->
//                oauth2ResourceServer
//                    .jwt(jwt -> jwt
//                        .decoder(jwtDecoder())
//                        .jwkSetUri(jwkSetUri)
//                    )
//            );
    }

//    @Bean
//    public JwtDecoder jwtDecoder() {
//        return JwtDecoders.fromIssuerLocation(issuerUri);
//    }

    @Bean
    public AccessDecisionManager accessDecisionManager() {
        List<AccessDecisionVoter<? extends Object>> decisionVoters = Arrays
                .asList(new OPAVoter("http://localhost:8181/v1/data/http/authz/allow"));
        return new UnanimousBased(decisionVoters);
    }

}
