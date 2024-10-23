import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Trophy, Users, Brain } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Smart Workout Tracking",
      description: "Log your workouts with AI-powered form suggestions and weight recommendations",
      icon: Dumbbell,
    },
    {
      title: "Community Driven",
      description: "Connect with friends, join gyms, and share your fitness journey",
      icon: Users,
    },
    {
      title: "Achievement System",
      description: "Earn badges and track your progress with our comprehensive tracking system",
      icon: Trophy,
    },
    {
      title: "AI Workout Coach",
      description: "Get personalized workout plans and real-time suggestions powered by AI",
      icon: Brain,
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-12 py-8">
      <section className="text-center space-y-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Transform Your Fitness Journey with FitSync
        </h1>
        <p className="text-xl text-muted-foreground">
          Your all-in-one AI-powered workout companion for tracking, planning, and achieving your fitness goals
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/create">Start Workout</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/exercises">Browse Exercises</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-6 w-6" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </section>

      <section className="w-full max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>Today's Suggested Workout</CardTitle>
            <CardDescription>Based on your fitness goals and previous activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Complete this workout to earn progress towards your weekly goals
              </p>
              <Button asChild>
                <Link href="/create">Start Workout</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}