import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';

class AuthPage extends StatelessWidget {
  const AuthPage();

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: AutoRouter(),
    );
  }
}
